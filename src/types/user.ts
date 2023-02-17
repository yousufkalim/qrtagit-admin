export default interface Users {
  id: number;
  name?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  user_type: string;
  looser?: Looser;
}

interface Looser {
  id: number;
  created_at: string;
  modified_at: string;
  profile_picture?: string;
  address?: string;
  city?: string;
  postal_code?: string;
  state?: string;
  user: number;
}
