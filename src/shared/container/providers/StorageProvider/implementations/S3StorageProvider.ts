import { AWSError, Response, S3 } from "aws-sdk";
import fs from "fs";
import mime from "mime";
import { resolve } from "path";

import upload from "@config/upload";

import { IStorageProvider } from "../IStorageProvider";
import { PromiseResult } from "aws-sdk/lib/request";
import { AppError } from "@shared/errors/AppError";
import { Readable } from "typeorm/platform/PlatformTools";

class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: process.env.AWS_BUCKET_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });
  }

  async save(file: string, folder: string): Promise<string> {
    const originalName = resolve(upload.tmpFolder, file);

    const fileContent = await fs.promises.readFile(originalName);

    const ContentType = mime.getType(originalName);

    await this.client
      .putObject({
        Bucket: `${process.env.AWS_BUCKET}/${folder}`,
        Key: file,
        ACL: "public-read",
        Body: fileContent,
        ContentType,
      })
      .promise()
      .catch(e => {
        console.log('Erro ao realizar upload :' + e)
        throw new AppError('Erro ao realizar upload :' + e)
      });
  


    await fs.promises.unlink(originalName);

    return file;
  }

  async delete(file: string, folder: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: `${process.env.AWS_BUCKET}`,
        Key: `${folder}/${file}`,
      })
      .promise();
  }

  async get(filename: string, folder: string): Promise<any> {
   const file = await this.client
                        .getObject({
                          Bucket: `${process.env.AWS_BUCKET}`,
                          Key: `${folder}/${filename}`,
                        })
                        .promise()
                        .catch(e => {
                          console.log('Erro ao buscar upload :' + e)
                          throw new AppError('Erro ao buscar upload :' + e)
                        });


    return  file;
  }
  
}

export { S3StorageProvider };
