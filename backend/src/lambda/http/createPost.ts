import "source-map-support/register";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";
import { CreatePostRequest } from "../../requests/CreatePostRequest";
import { getUserId } from "../utils";
import { PostsAccess } from "../../dataLayer/postsAccess";
import { createLogger } from "../../utils/logger";

const logger = createLogger("createTodo");

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const newPost: CreatePostRequest = JSON.parse(event.body);

  const userId = getUserId(event);
  logger.info(`event: ${event}`);
  logger.info(`userId: ${userId}`);
  const item = await new PostsAccess().createPost(newPost, userId);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      item,
    }),
  };
};
