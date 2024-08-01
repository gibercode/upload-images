import { Callout } from "@radix-ui/themes";

export const Toast = ({ message }: { message: string }) => {
  return (
    <Callout.Root
      color="red"
      role="alert"
      style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Callout.Text>{message}</Callout.Text>
    </Callout.Root>
  );
};
