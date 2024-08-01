import { Flex, Text, Card, RadioCards } from "@radix-ui/themes";
import { useFileStore } from "@/stores/files";

export const FilesList = () => {
  const { files } = useFileStore();

  return (
    <Card style={{ marginTop: "20px", width: "30rem" }}>
      {files?.length ? (
        <RadioCards.Root
          defaultValue="1"
          columns={{ initial: "3", sm: "1" }}
          style={{ width: "400px" }}
        >
          {files.map((item: Record<string, string>, index: number) => {
            return (
              <RadioCards.Item value={index.toString()} key={index}>
                <Flex direction="column" width="100%">
                  <Text weight="bold" mb="2">
                    {item?.pathname}
                  </Text>
                  <Text>{item?.url}</Text>
                </Flex>
              </RadioCards.Item>
            );
          })}
        </RadioCards.Root>
      ) : (
        <p style={{ textAlign: "center" }}>Upload a file</p>
      )}
    </Card>
  );
};
