# Andavar Textile - E-commerce Website

A modern, responsive e-commerce website for Andavar Textile, an Indian garment manufacturer and global exporter specializing in traditional clothing.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Showcase**: 8 categories with 40+ products
- **Shopping Cart**: Full cart functionality with Zustand state management
- **Contact Forms**: Integrated with Supabase for form submissions
- **Order Management**: Complete checkout flow with database storage
- **Modern Typography**: Cormorant for titles, Space Grotesk for text
- **Performance Optimized**: Built with Vite and React 18

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **Database**: Supabase
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📦 Setup Instructions

### 1. Clone and Install
```bash
git clone <repository-url>
cd andavar-textile
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key
3. Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Database Setup

Run the migration files in your Supabase SQL editor:

1. `supabase/migrations/create_contact_submissions.sql`
2. `supabase/migrations/create_order_submissions.sql`

### 4. Start Development Server
```bash
npm run dev
```

## 📊 Database Schema

### Contact Submissions
- `id` (UUID, Primary Key)
- `name` (Text, Required)
- `email` (Text, Required)
- `company` (Text, Optional)
- `country` (Text, Required)
- `message` (Text, Required)
- `created_at` (Timestamp)

### Order Submissions
- `id` (UUID, Primary Key)
- `customer_name` (Text, Required)
- `email` (Text, Required)
- `phone` (Text, Required)
- `company` (Text, Optional)
- `country` (Text, Required)
- `address` (Text, Required)
- `notes` (Text, Optional)
- `items` (JSONB, Required)
- `total_amount` (Numeric, Required)
- `status` (Text, Default: 'pending')
- `created_at` (Timestamp)

## 🔐 Security

- Row Level Security (RLS) enabled on all tables
- Public insert access for forms (contact & orders)
- Authenticated read access for admin users
- Input validation with Zod schemas

## 🎨 Design System

### Colors
- Primary: Maroon (#800000)
- Accent: Gold (#FFD700)
- Background: White (#FFFFFF)
- Text: Dark Gray (#222222)
- Section BG: Light Gray (#F9F9F9)

### Typography
- **Titles**: Cormorant (serif)
- **Body Text**: Space Grotesk (sans-serif)

## 📱 Responsive Breakpoints

- Mobile: ≤640px
- Tablet: 641-768px
- iPad: 768-1024px
- Laptop: 1025-1440px
- Desktop: 1440px+

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- Railway
- Render

Make sure to set your environment variables in your deployment platform.

## 📞 Support

For technical support or questions about the implementation, please refer to the documentation or create an issue in the repository.