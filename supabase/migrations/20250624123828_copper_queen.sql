/*
  # Create order submissions table

  1. New Tables
    - `order_submissions`
      - `id` (uuid, primary key)
      - `customer_name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `company` (text, optional)
      - `country` (text, required)
      - `address` (text, required)
      - `notes` (text, optional)
      - `items` (jsonb, required) - stores cart items
      - `total_amount` (numeric, required)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `order_submissions` table
    - Add policy for inserting orders (public access)
    - Add policy for reading orders (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS order_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  country text NOT NULL,
  address text NOT NULL,
  notes text,
  items jsonb NOT NULL,
  total_amount numeric(10,2) NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE order_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert order submissions
CREATE POLICY "Anyone can submit orders"
  ON order_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can read orders (for admin access)
CREATE POLICY "Authenticated users can read order submissions"
  ON order_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update order status
CREATE POLICY "Authenticated users can update order status"
  ON order_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);