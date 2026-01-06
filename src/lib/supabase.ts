import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Booking {
  id?: string;
  service_type: 'appliance_repair' | 'moving' | 'cleaning';
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  service_address: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
  status?: string;
  created_at?: string;
}
