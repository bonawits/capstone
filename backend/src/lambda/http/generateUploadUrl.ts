import "source-map-support/register";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyHandler,
} from "aws-lambda";
import { getUserId } from "../utils";
import { createLogger } from "../../utils/logger";
import { S3Helper } from "../../helpers/s3Helper";

const logger = createLogger("generateUrlUpload");

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const postId = event.pathParameters.postId;
  const userId = getUserId(event);

  logger.info(`User ${userId} is generating url for post ${postId}`);

  const uploadUrl = await new S3Helper().getPresignedUrl(postId);

  return {
    statusCode: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({ uploadUrl }),
  };
};
