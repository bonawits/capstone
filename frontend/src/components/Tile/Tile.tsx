import React from "react";
import { Box, ButtonGroup, Button, Image } from "@chakra-ui/core";
import { UserPost } from "../../types/UserPost";

interface TileProps extends UserPost {}

export const Tile: React.FC<TileProps> = ({ ...props }) => {
  const { postId, createdAt, caption, attachmentUrl } = props;
  return (
    <Box maxWidth="350px" border="3px black solid" mt="2rem" p="1rem">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="cwenter"
        mb="1rem"
      >
        <Box display="flex" alignItems="center">
          {createdAt}
        </Box>
        <ButtonGroup spacing={4}>
          <Button
            leftIcon="edit"
            variantColor="blue"
            variant="outline"
            onClick={() => {
              console.log("edit clicked");
            }}
          >
            Edit
          </Button>
          <Button
            leftIcon="delete"
            variantColor="red"
            variant="outline"
            onClick={() => {
              console.log("delete clicked");
            }}
          >
            Delete
          </Button>
        </ButtonGroup>
      </Box>
      <Box mb="1rem">
        <Image size="300px" src={attachmentUrl} />
      </Box>
      <Box>
        <p>{caption}</p>
      </Box>
    </Box>
  );
};
