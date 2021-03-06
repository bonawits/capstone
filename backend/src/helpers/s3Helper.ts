import * as AWS from "aws-sdk";
import * as AWSXRay from "aws-xray-sdk";
import { createLogger } from "../utils/logger";

const logger = createLogger("s3Helper");
const XAWS = AWSXRay.captureAWS(AWS);

export class S3Helper {
  constructor(
    private readonly s3: AWS.S3 = new XAWS.S3({
      signatureVersion: "v4",
      region: process.env.region,
      params: { Bucket: process.env.IMAGES_S3_BUCKET },
    }),
    private readonly signedUrlExpireSeconds = 60 * 5
  ) {}
  async getPostAttachmentUrl(postId: string): Promise<string> {
    logger.info(`getPostAttachmentUrl invoked for post ${postId}`);
    try {
      await this.s3
        .headObject({
          Bucket: process.env.IMAGES_S3_BUCKET,
          Key: `${postId}.png`,
        })
        .promise();

      return this.s3.getSignedUrl("getObject", {
        Bucket: process.env.IMAGES_S3_BUCKET,
        Key: `${postId}.png`,
        Expires: this.signedUrlExpireSeconds,
      });
    } catch (err) {
      console.log(err);
    }
    return null;
  }

  getPresignedUrl(postId: string): string {
    logger.info(`getPresignedUrl invoked for post ${postId}`);
    logger.info(`bucket: ${process.env.IMAGES_S3_BUCKET}`);
    return this.s3.getSignedUrl("putObject", {
      Bucket: process.env.IMAGES_S3_BUCKET,
      Key: `${postId}.png`,
      Expires: this.signedUrlExpireSeconds,
    }) as string;
  }
}
