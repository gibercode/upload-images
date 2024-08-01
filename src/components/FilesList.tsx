import { useState } from "react";
import { Flex, Text, Card, RadioCards, Box, Button } from "@radix-ui/themes";
import { useFileStore } from "@/stores/files";
import { EditDialog } from "./EditDialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { handleDownload } from "@/utils";

export const FilesList = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { files, setData } = useFileStore();

  const handleDelete = (index: number) => {
    const filesCopy = [...files];
    filesCopy.splice(index, 1);
    setData(filesCopy);
  };

  return (
    <>
      <Card style={{ marginTop: "20px", width: "30rem" }}>
        {files?.length ? (
          <RadioCards.Root defaultValue="1" columns={{ initial: "3", sm: "1" }}>
            {files.map((item: Record<string, string>, index: number) => {
              return (
                <Box
                  key={index}
                  position="relative"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setCurrentIndex(index)}
                  onMouseLeave={() => setCurrentIndex(-1)}
                >
                  <Card key={index} style={{ width: "100%" }}>
                    <Flex direction="column" width="100%">
                      <Text weight="bold" mb="2">
                        {item?.pathname}
                      </Text>
                      <Text>
                        {item?.url}{" "}
                        <a
                          style={{
                            color: "#1976d2",
                            textDecoration: "underline",
                            marginLeft: "0.25rem",
                          }}
                          onClick={() =>
                            handleDownload(item?.downloadUrl, item?.pathname)
                          }
                        >
                          Download
                        </a>
                      </Text>
                    </Flex>
                  </Card>
                  {currentIndex === index && (
                    <>
                      <Box position="absolute" right="9" top="1">
                        <EditDialog currentFile={files[index]} index={index} />
                      </Box>
                      <Box position="absolute" right="3" top="1">
                        <Button color="red" onClick={() => handleDelete(index)}>
                          <Cross1Icon />
                        </Button>
                      </Box>
                    </>
                  )}
                </Box>
              );
            })}
          </RadioCards.Root>
        ) : (
          <Flex justify="center" align="center">
            <Text>Upload a file</Text>
          </Flex>
        )}
      </Card>
    </>
  );
};
