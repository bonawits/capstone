import React from "react";
import { Flex, Box, Link, Heading, Button } from "@chakra-ui/core";
import { Tile } from "../Tile";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { NewPostModal } from "../NewPostModal";
import { Loading } from "../Loading";
import Auth from "../../auth/Auth";
import { getPosts, deletePost, patchPost } from "../../api/capstone-api";

export interface FeedProps {
  auth: Auth;
  history: any;
}

export const Feed: React.FC<FeedProps> = ({ auth, history }) => {
  React.useEffect(() => {
    const getInitalData = async () => {
      setIsLoading(true);
      await fetchPosts();
      setIsLoading(false);
    };
    getInitalData();
  }, []);

  const fetchPosts = async () => {
    const posts = await getPosts(auth.getIdToken());
    setPosts(posts);
  };

  const [posts, setPosts] = React.useState<any[]>([]);
  const [deletePostIndex, setDeletePostIndex] = React.useState<number | null>(
    null
  );
  const [isNewPostModalOpen, setIsNewPostModalOpen] = React.useState<boolean>(
    false
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <>
      {isLoading && <Loading />}
      {isNewPostModalOpen && (
        <NewPostModal
          auth={auth}
          isOpen={isNewPostModalOpen}
          onCancel={async () => {
            setIsNewPostModalOpen(false);
          }}
          onConfirm={async () => {
            setIsNewPostModalOpen(false);
            await fetchPosts();
          }}
        />
      )}
      <DeleteModal
        isOpen={deletePostIndex !== null}
        onConfirm={async () => {
          if (deletePostIndex !== null) {
            setIsLoading(true);
            const { postId } = posts[deletePostIndex];
            await deletePost(auth.getIdToken(), postId);
            setDeletePostIndex(null);
            await fetchPosts();
            setIsLoading(false);
          }
        }}
        onCancel={() => {
          setDeletePostIndex(null);
        }}
      />
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="baseline"
        p="1rem"
        borderBottom="3px dashed black"
      >
        <Heading as="h1" size="sm">
          Capstone Project
        </Heading>
        <Button
          leftIcon="add"
          variantColor="green"
          variant="outline"
          onClick={() => {
            setIsNewPostModalOpen(true);
          }}
        >
          New Post
        </Button>
        <Link onClick={() => auth.logout()}>Logout</Link>
      </Flex>
      <Flex
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
          {posts.map((post, index) => (
            <Tile
              key={post.postId}
              postId={post.postId}
              createdAt={post.createdAt}
              caption={post.caption}
              attachmentUrl={post.attachmentUrl}
              favourite={post.favourite}
              onEdit={async () => {
                setIsLoading(true);
                await patchPost(auth.getIdToken(), post.postId, {
                  favourite: !post.favourite,
                });
                await fetchPosts();
                setIsLoading(false);
              }}
              onDelete={() => setDeletePostIndex(index)}
            />
          ))}
        </Box>
      </Flex>
    </>
  );
};
