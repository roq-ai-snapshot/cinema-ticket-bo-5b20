import { UserInterface } from 'interfaces/user';
import { ShowingInterface } from 'interfaces/showing';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  user_id: string;
  showing_id: string;
  booking_time: any;
  number_of_tickets?: number;
  total_price?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  showing?: ShowingInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  showing_id?: string;
}
