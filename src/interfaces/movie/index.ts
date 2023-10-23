import { ShowingInterface } from 'interfaces/showing';
import { GetQueryInterface } from 'interfaces';

export interface MovieInterface {
  id?: string;
  title: string;
  director?: string;
  duration?: number;
  rating?: number;
  release_date?: any;
  genre?: string;
  created_at?: any;
  updated_at?: any;
  showing?: ShowingInterface[];

  _count?: {
    showing?: number;
  };
}

export interface MovieGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  director?: string;
  genre?: string;
}
