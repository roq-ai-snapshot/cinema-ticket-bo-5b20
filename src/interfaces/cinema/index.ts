import { ShowingInterface } from 'interfaces/showing';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CinemaInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  seating_capacity?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  showing?: ShowingInterface[];
  user?: UserInterface;
  _count?: {
    showing?: number;
  };
}

export interface CinemaGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
