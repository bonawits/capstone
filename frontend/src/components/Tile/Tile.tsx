import React from "react";
import { Box, ButtonGroup, Button, Image } from "@chakra-ui/core";
import { UserPost } from "../../types/UserPost";

interface TileProps extends UserPost {
  onEdit: () => void;
  onDelete: () => void;
}

export const Tile: React.FC<TileProps> = ({ ...props }) => {
  const { postId, createdAt, caption, attachmentUrl, onEdit, onDelete } = props;
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

        <Button
          leftIcon="delete"
          variantColor="red"
          variant="outline"
          onClick={onDelete}
        >
          Delete
        </Button>
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
