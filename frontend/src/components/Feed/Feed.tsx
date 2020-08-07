import React from "react";
import { Box, Link, Heading } from "@chakra-ui/core";
import { Tile } from "../Tile";
import { DeleteModal } from "../DeleteModal/DeleteModal";

const mockPosts = [
  {
    postId: "1234",
    createdAt: "07/08/2020",
    caption: "pineapple",
    attachmentUrl:
      "https://images.unsplash.com/photo-1591456721522-d884e5d6299b",
  },
  {
    postId: "224466",
    createdAt: "17/12/2020",
    caption: "laptop",
    attachmentUrl:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
  },
  {
    postId: "4324",
    createdAt: "10/01/2020",
    caption: "field",
    attachmentUrl:
      "https://images.unsplash.com/photo-1596805892053-7c2180568a1f",
  },
];

const editPost = (index: number) => {
  console.log(`post index ${index}`);
};

export const Feed: React.FC = () => {
  const [deletePostIndex, setDeletePostIndex] = React.useState<number | null>(
    null
  );

  return (
    <>
      <DeleteModal
        isOpen={deletePostIndex !== null}
        onConfirm={() => {
          console.log("delete confirm clicked");
          setDeletePostIndex(null);
        }}
        onCancel={() => {
          console.log("close delete modal clicked");
          setDeletePostIndex(null);
        }}
      />
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
          {mockPosts.map((post, index) => (
            <Tile
              postId={post.postId}
              createdAt={post.createdAt}
              caption={post.caption}
              attachmentUrl={post.attachmentUrl}
              onEdit={() => editPost(index)}
              onDelete={() => setDeletePostIndex(index)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
