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
import Auth from "../../auth/Auth";
import { Loading } from "../Loading";
import { createPost, getUploadUrl, uploadFile } from "../../api/capstone-api";

interface NewPostModalProps {
  auth: Auth;
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const NewPostModal: React.FC<NewPostModalProps> = ({
  auth,
  isOpen,
  onCancel,
  onConfirm,
}) => {
  const maxCaptionLength = 60;
  const [caption, setCaption] = React.useState<string>("");
  const [captionLength, setCaptionLength] = React.useState<number>(0);
  const [imageFile, setImageFile] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onPostCreate = async () => {
    try {
      if (imageFile && caption) {
        const tokenId = auth.getIdToken();
        const newPost = await createPost(tokenId, {
          caption,
        });
        const attachmentUrl = await getUploadUrl(tokenId, newPost.postId);
        await uploadFile(attachmentUrl, imageFile);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
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
              onClick={async () => {
                setIsLoading(true);
                await onPostCreate();
                await onConfirm();
                setIsLoading(false);
              }}
              isDisabled={captionLength === 0 || !imageFile}
            >
              Create post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
