import React from "react";
import { Box, Heading, Button } from "@chakra-ui/core";

export const Login: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
    >
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        border="3px solid black"
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
      </Box>
    </Box>
  );
};
