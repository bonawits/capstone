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
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Flex,
} from "@chakra-ui/core";

interface NewPostModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

export const NewPostModal: React.FC<NewPostModalProps> = ({
  isOpen,
  onCancel,
}) => {
  const maxCaptionLength = 60;
  const [caption, setCaption] = React.useState<string>("");
  const [captionLength, setCaptionLength] = React.useState<number>(0);
  const [imageFile, setImageFile] = React.useState<File>();

  console.log(imageFile);

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a new post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Flex
              mb="1rem"
              border="1px solid #E2E8F0"
              borderRadius=".25rem"
              p="1rem"
            >
              <input
                type="file"
                name="file"
                accept=".png,.jpeg,.jpg"
                onChange={(event: any) => {
                  setImageFile(event.target.files[0]);
                }}
              />
            </Flex>
            <FormControl>
              <FormLabel htmlFor="caption">Caption</FormLabel>
              <Input
                id="caption"
                value={caption}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCaption(event.target.value);
                  setCaptionLength(event.target.value.length);
                }}
                maxLength={maxCaptionLength}
                width="100%"
              />
              <FormHelperText id="email-helper-text">
                {captionLength}/{maxCaptionLength}
              </FormHelperText>
            </FormControl>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={onCancel}>
            Close
          </Button>
          <Button
            variantColor="green"
            onClick={() => {
              console.log("new post confirm");
            }}
            isDisabled={captionLength === 0 || !imageFile}
          >
            Create post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};