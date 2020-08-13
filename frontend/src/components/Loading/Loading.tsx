import React from "react";
import { Modal, Spinner, ModalOverlay, ModalBody, Flex } from "@chakra-ui/core";

export const Loading: React.FC = () => {
  return (
    <Modal isCentered isOpen>
      <ModalOverlay>
        <ModalBody>
          <Flex
            width="100%"
            height="100vh"
            alignItems="center"
            justifyContent="center"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="black"
              size="xl"
            />
          </Flex>
        </ModalBody>
      </ModalOverlay>
    </Modal>
  );
};
