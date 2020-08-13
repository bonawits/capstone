import "source-map-support/register";

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyHandler,
} from "aws-lambda";

import { PostsAccess } from "../../dataLayer/postsAccess";
import { createLogger } from "../../utils/logger";
import { getUserId } from "../utils";

const logger = createLogger("deleteTodo");

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const postId = event.pathParameters.postId;
  const userId = getUserId(event);

  logger.info(`User ${userId} is deleting post ${postId}`);

  await new PostsAccess().deletePostById(userId, postId);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({}),
  };
};
