import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MockAppService } from './mock-app.service';
import { ProductOrder, ProductOrderCreate } from './tmf622/api/tmf622-api';

@Controller('productOrderingManagement/v4/productOrder')
export class AppController {
  constructor(private readonly appService: MockAppService) {}

  @Get()
  async getOrders(
    @Query('filter') filter: string,
    @Query('fields') fields: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Promise<ProductOrder[]> {
    const query = {
      filter,
      fields,
      offset,
      limit,
    };
    const result = await this.appService.listProductOrder(query);
    return result;
  }

  @Get(':id')
  async getOrder(
    @Param('id') id: string,
    @Query('fields') fields: string,
  ): Promise<ProductOrder> {
    const query = {
      fields,
    };
    const result = await this.appService.retrieveProductOrder(id, query);
    return result;
  }

  @Post()
  async createOrder(@Body() body: ProductOrderCreate): Promise<ProductOrder> {
    const result = await this.appService.createProductOrder(body);
    return result;
  }
}
