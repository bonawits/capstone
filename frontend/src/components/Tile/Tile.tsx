import React from "react";
import { Flex, Box, IconButton, Image } from "@chakra-ui/core";
import dateFormat from "dateformat";
import { UserPost } from "../../types/UserPost";

interface TileProps extends UserPost {
  onEdit: () => void;
  onDelete: () => void;
}

export const Tile: React.FC<TileProps> = ({ ...props }) => {
  const { createdAt, caption, attachmentUrl, onDelete } = props;
  return (
    <Box maxWidth="350px" border="3px black solid" mt="2rem" p="1rem">
      <Flex justifyContent="space-between" alignItems="cwenter" mb="1rem">
        <Box display="flex" alignItems="center">
          {dateFormat(createdAt, "yyyy-mm-dd hh:MM") as string}
        </Box>

        <IconButton
          aria-label="Delete post"
          icon="delete"
          variantColor="red"
          variant="outline"
          onClick={onDelete}
        >
          Delete
        </IconButton>
      </Flex>
      <Box mb="1rem">
        <Image size="300px" src={attachmentUrl} />
      </Box>
      <Box>
        <p>{caption}</p>
      </Box>
    </Box>
  );
};
