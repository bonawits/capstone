import React from "react";
import { Flex, Box, IconButton, Image } from "@chakra-ui/core";
import dateFormat from "dateformat";
import { UserPost } from "../../types/UserPost";

interface TileProps extends UserPost {
  onEdit: () => void;
  onDelete: () => void;
}

export const Tile: React.FC<TileProps> = ({ ...props }) => {
  const {
    createdAt,
    caption,
    attachmentUrl,
    favourite,
    onDelete,
    onEdit,
  } = props;
  return (
    <Box maxWidth="350px" border="3px black solid" mt="2rem" p="1rem">
      <Flex justifyContent="space-between" alignItems="cwenter" mb="1rem">
        <Box display="flex" alignItems="center">
          {dateFormat(createdAt, "yyyy-mm-dd hh:MM") as string}
        </Box>

        <Flex>
          <IconButton
            aria-label="favourite post"
            icon="delete"
            variantColor="red"
            variant="outline"
            onClick={onDelete}
            mr="5px"
          />

          <IconButton
            aria-label="Delete post"
            icon="star"
            variantColor={favourite ? "yellow" : "grey"}
            variant="outline"
            onClick={onEdit}
          />
        </Flex>
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
