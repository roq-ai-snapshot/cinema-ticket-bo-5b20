import { BookingInterface } from 'interfaces/booking';
import { CinemaInterface } from 'interfaces/cinema';
import { MovieInterface } from 'interfaces/movie';
import { GetQueryInterface } from 'interfaces';

export interface ShowingInterface {
  id?: string;
  showing_time: any;
  cinema_id: string;
  movie_id: string;
  available_seats?: number;
  price?: number;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  cinema?: CinemaInterface;
  movie?: MovieInterface;
  _count?: {
    booking?: number;
  };
}

export interface ShowingGetQueryInterface extends GetQueryInterface {
  id?: string;
  cinema_id?: string;
  movie_id?: string;
}
