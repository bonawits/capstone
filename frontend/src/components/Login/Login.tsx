import React from "react";
import { Flex, Box, Heading, Button } from "@chakra-ui/core";

export const Login: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        border="3px dashed black"
        borderRadius="10px"
        p="2rem"
      >
        <Heading as="h1">Capstone Project</Heading>
        <Box mt="1rem">
          <Button
            variantColor="green"
            onClick={() => console.log("login clicked")}
          >
            Login
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
