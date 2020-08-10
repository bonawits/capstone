import React from "react";
import { Flex, Heading } from "@chakra-ui/core";

export const NotFound: React.FC = () => {
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
        <Heading as="h1">Page not found</Heading>
      </Flex>
    </Flex>
  );
};
