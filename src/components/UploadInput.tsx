import { useRef, ChangeEvent } from "react";
import { Button } from "@radix-ui/themes";

export const UploadInput = () => {
  const hiddenFileInput: any = useRef();

  const handleUpload = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log("🚀 ~ handleChange ~ event:", event.target.files);
  };

  return (
    <>
      <form>
        <Button
          onClick={handleUpload}
          size="3"
          color="iris"
          style={{ cursor: "pointer" }}
        >
          Search images
        </Button>
        <input
          onChange={handleChange}
          type="file"
          style={{ display: "none" }}
          ref={hiddenFileInput}
          multiple
        />
      </form>
    </>
  );
};
