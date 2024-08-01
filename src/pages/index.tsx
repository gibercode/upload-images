import Head from "next/head";
import { Flex, Box, Callout } from "@radix-ui/themes";
import { Form, FilesList } from "@/components";

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
          <Form />
          <FilesList />
        </Flex>
      </Box>
    </>
  );
}
