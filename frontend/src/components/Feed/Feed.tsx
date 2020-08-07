import React from "react";
import { Box, Link, Heading } from "@chakra-ui/core";
import { Tile } from "../Tile";

const mockTile = () => (
  <Tile
    postId="1234"
    createdAt="07/08/2020"
    caption="mock post"
    attachmentUrl="https://images.unsplash.com/photo-1591456721522-d884e5d6299b"
  />
);

export const Feed: React.FC = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p="1rem"
        borderBottom="3px dashed black"
      >
        <Heading as="h1" size="sm">
          Username
        </Heading>
        <Link
          onClick={() => {
            console.log("logout clicked");
          }}
        >
          Logout
        </Link>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          width={["80%", "50%"]}
          backgroundColor="red"
        >
          {mockTile()}
          {mockTile()}
          {mockTile()}
        </Box>
      </Box>
    </>
  );
};
