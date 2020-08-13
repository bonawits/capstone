import "source-map-support/register";
import { getUserId } from "../utils";
import { getAllPosts } from "../../businessLogic/posts";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyHandler,
} from "aws-lambda";
import { createLogger } from "../../utils/logger";
import { S3Helper } from "../../helpers/s3Helper";

const logger = createLogger("getPosts");
const s3Helper = new S3Helper();

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const user = getUserId(event);
  const items = await getAllPosts(user);

  logger.info(`get posts for user for user ${user}`);

  for (const item of items) {
    item.attachmentUrl = await s3Helper.getTodoAttachmentUrl(item.postId);
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      items,
    }),
  };
};
