import { useRef, useState } from "react";
import { Button, Spinner } from "@radix-ui/themes";
import { useFileStore } from "@/stores/files";
import { Toast } from "./Toast";
import { useUiStore } from "@/stores/ui";

export const Form = () => {
  const { setLoading, loading } = useUiStore();
  const [error, setError] = useState({ show: false, message: "" });
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const { setData }: any = useFileStore();
  const maxSize = 5 * 1024 * 1024;

  const handleShowError = (message: string) => {
    setError({
      show: true,
      message: message,
    });

    setTimeout(() => {
      setError({
        show: false,
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      {error?.show && <Toast message={error?.message} />}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            setLoading(true);
            fetch("https://jsonplaceholder.typicode.com/todos/1");
            if (!hiddenFileInput.current?.files) {
              return handleShowError("No file selected");
            }
            const files = hiddenFileInput.current.files;

            if (Array.from(files).some((item) => item.size > maxSize)) {
              return handleShowError(
                "Some of the files is larger than 5 MB, please upload a smaller file"
              );
            }

            const result = await Promise.all(
              Array.from(files).map(async (item: any) => {
                const response = await fetch(
                  `api/upload?filename=${item?.name}`,
                  {
                    method: "POST",
                    body: item,
                  }
                );
                return response.json();
              })
            );

            setData(result);
          } catch (err) {
            handleShowError("Something went wrong");
          } finally {
            setLoading(false);
          }
        }}
      >
        <input type="file" ref={hiddenFileInput} multiple />
        <Button
          size="3"
          color="iris"
          style={{ cursor: "pointer" }}
          type="submit"
          disabled={loading}
        >
          {loading ? <Spinner /> : "Submit"}
        </Button>
      </form>
    </>
  );
};
