/*
  # Create Orders and Testimonials Tables

  ## Overview
  This migration creates the database schema for the Tabldot catering website, including tables for customer orders and testimonials with proper security policies.

  ## New Tables

  ### 1. `orders`
  Customer order submissions from the order form
  - `id` (uuid, primary key) - Unique order identifier
  - `name` (text) - Customer full name
  - `email` (text) - Customer email address
  - `phone` (text) - Customer phone number
  - `company` (text, nullable) - Optional company name
  - `service` (text) - Selected service type
  - `guests` (integer) - Number of guests
  - `event_date` (date) - Event date
  - `event_time` (time) - Event time
  - `message` (text, nullable) - Additional requirements
  - `status` (text) - Order status (pending, confirmed, completed, cancelled)
  - `created_at` (timestamptz) - Timestamp when order was created

  ### 2. `testimonials`
  Customer reviews and testimonials
  - `id` (uuid, primary key) - Unique testimonial identifier
  - `name` (text) - Customer name
  - `company` (text) - Customer company
  - `rating` (integer) - Rating from 1-5
  - `comment` (text) - Review comment
  - `avatar_url` (text, nullable) - Optional avatar URL
  - `created_at` (timestamptz) - Timestamp when review was created

  ## Security
  - Row Level Security (RLS) enabled on both tables
  - Public users can insert orders (for form submissions)
  - Public users can read testimonials (for display on website)
  - Only authenticated admins should be able to manage data (future implementation)

  ## Important Notes
  1. Tables use IF NOT EXISTS to prevent errors on re-run
  2. Default values set for status and timestamps
  3. Security policies are restrictive - only necessary operations allowed
  4. Indexes created on frequently queried columns for performance
*/

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  service text NOT NULL,
  guests integer NOT NULL CHECK (guests > 0),
  event_date date NOT NULL,
  event_time time NOT NULL,
  message text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Orders policies: Allow public to insert (for form submissions)
CREATE POLICY "Allow public to insert orders"
  ON orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Testimonials policies: Allow public to read
CREATE POLICY "Allow public to read testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders(status);
CREATE INDEX IF NOT EXISTS testimonials_created_at_idx ON testimonials(created_at DESC);
