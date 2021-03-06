import { PostsAccess } from "../dataLayer/PostsAccess";
import { UserPost } from "../models/UserPost";

const userAccess = new PostsAccess();

export async function getAllPosts(user: string): Promise<UserPost[]> {
  return await userAccess.getUserPosts(user);
}
