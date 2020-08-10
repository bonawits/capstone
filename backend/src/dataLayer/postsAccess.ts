import { UserPost } from "../models/UserPost";
import * as AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { createLogger } from "../utils/logger";

const logger = createLogger("postsAccess");

export class PostsAccess {
  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly postsTable = process.env.POSTS_TABLE,
    private readonly indexName = process.env.INDEX_NAME,
    private readonly userIndex = process.env.USER_ID_INDEX
  ) {}

  async getUserPosts(userId: string): Promise<UserPost[]> {
    logger.info(`table name: ${this.postsTable}`);
    logger.info(`index name: ${this.indexName}`);
    logger.info(`user id: ${userId}`);
    logger.info(`user index: ${this.userIndex}`);

    const result = await this.docClient
      .query({
        TableName: this.postsTable,
        IndexName: this.indexName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
          ":userId": userId,
        },
      })
      .promise();

    return result.Items as UserPost[];
  }
}
