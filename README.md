# 🛍️ Basket - Modern E-commerce Platform

Basket is a modern, responsive e-commerce platform built with Next.js, React, and Tailwind CSS, designed to provide a seamless shopping experience.

## 🚀 Features

- 🛒 Shopping cart functionality
- 🔍 Product browsing and search
- 🔐 User authentication
- 💳 Secure checkout process
- 📱 Responsive design for all devices
- ⚡ Fast performance with Next.js
- 🎨 Beautiful UI with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 13+ (App Router), React 18+
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase
- **State Management**: React Context API
- **Icons**: Heroicons
- **Deployment**: Vercel

## 📦 Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- Supabase account (for backend services)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/basket.git
   cd basket
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🏗️ Project Structure

```
├── app/                  # App router pages
│   ├── about/           # About page
│   ├── blog/            # Blog section
│   ├── cart/            # Shopping cart
│   ├── checkout/        # Checkout process
│   └── ...
├── components/          # Reusable components
├── lib/                 # Utility functions and configurations
├── public/              # Static files
└── styles/              # Global styles
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Supabase](https://supabase.com/) for the backend services
