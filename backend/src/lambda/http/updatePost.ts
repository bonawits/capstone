import "source-map-support/register";

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";

import { UpdatePostRequest } from "../../requests/UpdatePostRequest";
import { PostsAccess } from "../../dataLayer/postsAccess";
import { createLogger } from "../../utils/logger";
import { getUserId } from "../utils";

const logger = createLogger("updatePost");

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const userId = getUserId(event);
  const postId = event.pathParameters.postId;
  const updatedPost: UpdatePostRequest = JSON.parse(event.body);

  logger.info(`User ${userId} updating group ${postId} to be ${updatedPost}`);
  await new PostsAccess().updatePost(userId, updatedPost, postId);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({}),
  };
};
