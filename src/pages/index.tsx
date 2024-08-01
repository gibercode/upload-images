import Head from "next/head";
import {
  Flex,
  Text,
  Button,
  Box,
  Card,
  Avatar,
  RadioCards,
} from "@radix-ui/themes";
import { UploadInput } from "@/components/UploadInput";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Upload images project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Flex height="100vh" justify="center" align="center" direction="column">
          <UploadInput />
          <Card style={{ marginTop: "20px" }}>
            <RadioCards.Root
              defaultValue="1"
              columns={{ initial: "3", sm: "1" }}
              style={{ width: "400px" }}
            >
              <RadioCards.Item value="1">
                <Flex direction="column" width="100%">
                  <Text weight="bold">File title</Text>
                  <Text>File name</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="2">
                <Flex direction="column" width="100%">
                  <Text weight="bold">File title</Text>
                  <Text>File name</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="3">
                <Flex direction="column" width="100%">
                  <Text weight="bold">File title</Text>
                  <Text>File name</Text>
                </Flex>
              </RadioCards.Item>
            </RadioCards.Root>
          </Card>
        </Flex>
      </Box>
    </>
  );
}
