import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/core";

interface DeleteModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as="p">Are you sure you weant to delete this item</Box>
        </ModalBody>
        <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={onCancel}>
            Close
          </Button>
          <Button variantColor="red" onClick={onConfirm}>
            Delete post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};