import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TechnicalSupportInterface {
  id?: string;
  user_id: string;
  issue_reported?: string;
  issue_status?: string;
  reported_time?: any;
  resolved_time?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TechnicalSupportGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  issue_reported?: string;
  issue_status?: string;
}
