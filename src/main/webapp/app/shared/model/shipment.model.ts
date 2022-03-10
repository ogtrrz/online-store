import dayjs from 'dayjs';
import { IInvoice } from 'app/shared/model/invoice.model';

export interface IShipment {
  id?: number;
  trackingCode?: string | null;
  date?: string;
  details?: string | null;
  invoice?: IInvoice | null;
}

export const defaultValue: Readonly<IShipment> = {};
