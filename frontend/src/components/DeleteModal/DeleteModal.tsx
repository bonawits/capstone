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
import { Loading } from "../Loading";

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
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  return (
    <>
      {isLoading && <Loading />}
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
            <Button
              variantColor="red"
              onClick={async () => {
                setIsLoading(true);
                await onConfirm();
                setIsLoading(false);
              }}
            >
              Delete post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
