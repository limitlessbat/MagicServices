/*
  # Create Bookings Table for Magic Services

  ## Overview
  This migration creates the bookings system for the Magic Services handyman website.
  
  ## New Tables
  
  ### `bookings`
  Stores customer service booking requests with the following columns:
  - `id` (uuid, primary key) - Unique identifier for each booking
  - `service_type` (text) - Type of service requested (appliance_repair, moving, cleaning)
  - `customer_name` (text) - Full name of the customer
  - `customer_email` (text) - Email address for confirmation
  - `customer_phone` (text) - Contact phone number
  - `service_address` (text) - Location where service is needed
  - `preferred_date` (date) - Requested service date
  - `preferred_time` (text) - Requested service time
  - `message` (text, optional) - Additional details or special requests
  - `status` (text) - Booking status (pending, confirmed, completed, cancelled)
  - `created_at` (timestamptz) - Timestamp when booking was created
  
  ## Security
  - Enable Row Level Security on bookings table
  - Add policy for public to create bookings (for the booking form)
  - Add policy for authenticated users to view all bookings (for admin panel)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text NOT NULL CHECK (service_type IN ('appliance_repair', 'moving', 'cleaning')),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  service_address text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text DEFAULT '',
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);