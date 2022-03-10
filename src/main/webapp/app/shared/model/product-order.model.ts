import dayjs from 'dayjs';
import { IOrderItem } from 'app/shared/model/order-item.model';
import { IInvoice } from 'app/shared/model/invoice.model';
import { ICustomer } from 'app/shared/model/customer.model';
import { OrderStatus } from 'app/shared/model/enumerations/order-status.model';

export interface IProductOrder {
  id?: number;
  placedDate?: string;
  status?: OrderStatus;
  code?: string;
  orderItems?: IOrderItem[] | null;
  invoices?: IInvoice[] | null;
  customer?: ICustomer | null;
}

export const defaultValue: Readonly<IProductOrder> = {};
