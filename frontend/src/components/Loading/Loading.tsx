import React from "react";
import { Flex, Spinner } from "@chakra-ui/core";

export const Loading: React.FC = () => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      position="absolute"
      zIndex={1401}
      justifyContent="center"
      alignItems="center"
      bg="rgba(192,192,192,0.5)"
      top={0}
      right={0}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="black"
        size="xl"
      />
    </Flex>
  );
};
