import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useFileStore } from "@/stores/files";
import { ChangeEvent, useState } from "react";
import { Pencil1Icon } from "@radix-ui/react-icons";

export const EditDialog = ({
  currentFile,
  index,
}: {
  currentFile: Record<string, string>;
  index: number;
}) => {
  const { setData, files } = useFileStore();
  const [input, setInput] = useState("");

  const handleEdit = () => {
    const filesCopy = [...files];
    filesCopy[index].pathname = input;
    setData(filesCopy);
  };

  const handleInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInput(value);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <Pencil1Icon />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="28.125rem">
        <Dialog.Title>Edit file</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to the file.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              name
            </Text>
            <TextField.Root
              onChange={handleInput}
              defaultValue={currentFile?.pathname}
              placeholder="Enter the file name"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleEdit}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
