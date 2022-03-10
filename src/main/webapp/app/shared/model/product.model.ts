import { IProductCategory } from 'app/shared/model/product-category.model';
import { ProductSize } from 'app/shared/model/enumerations/product-size.model';

export interface IProduct {
  id?: number;
  name?: string;
  description?: string | null;
  price?: number;
  productSize?: ProductSize;
  imageContentType?: string | null;
  image?: string | null;
  productCategory?: IProductCategory | null;
}

export const defaultValue: Readonly<IProduct> = {};
