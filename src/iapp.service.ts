import { ProductOrder, ProductOrderCreate } from './tmf622/api/tmf622-api';

export interface ListQuery {
  filter?: string;
  fields?: string;
  offset?: number;
  limit?: number;
}

export interface RetrieveQuery {
  fields?: string;
}

export interface IAppService {
  listProductOrder(query: ListQuery): Promise<ProductOrder[]>;
  retrieveProductOrder(id: string, query: RetrieveQuery): Promise<ProductOrder>;
  createProductOrder(productOrder: ProductOrderCreate): Promise<ProductOrder>;
}
