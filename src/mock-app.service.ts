import { Injectable } from '@nestjs/common';
import { IAppService, ListQuery, RetrieveQuery } from './iapp.service';
import { ProductOrder, ProductOrderCreate } from './tmf622/api/tmf622-api';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class MockAppService implements IAppService {
  async listProductOrder(query: ListQuery): Promise<ProductOrder[]> {
    let filePath = './src/tmf622/data/TZE_TMF622_OTC_30.json';
    if (query?.filter?.includes('OTC_RESERV')) {
      filePath = './src/tmf622/data/TZE_TMF622_OTC_RESERV_19.json';
    }
    const list = await this._getJsonFileContent(filePath);
    return Promise.resolve(list);
  }

  async retrieveProductOrder(
    id: string,
    query: RetrieveQuery,
  ): Promise<ProductOrder> {
    let filePath = './src/tmf622/data/TZE_TMF622_OTC_single.json';
    if (query?.fields?.includes('OTC_RESERV')) {
      filePath = './src/tmf622/data/TZE_TMF622_OTC_RESERV_single.json';
    }
    const order = await this._getJsonFileContent(filePath);
    return Promise.resolve(order);
  }

  async createProductOrder(
    productOrder: ProductOrderCreate,
  ): Promise<ProductOrder> {
    let filePath = './src/tmf622/data/TZE_TMF622_OTC_single.json';
    const order = await this._getJsonFileContent(filePath);
    return Promise.resolve(order);
  }

  private async _getJsonFileContent(filePath: string): Promise<any> {
    const readStream = createReadStream(join(process.cwd(), filePath));
    const streamToString = async (stream: any) => {
      const chunks = [];
      for await (const chunk of stream) {
        chunks.push(Buffer.from(chunk));
      }
      return Buffer.concat(chunks).toString('utf-8');
    };

    const content = await streamToString(readStream);

    return JSON.parse(content);
  }
}
