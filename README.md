# Tabldot - Premium Catering Website

🌐 **Live Demo:** [https://global-catering-web-bql0.bolt.host/](https://global-catering-web-bql0.bolt.host/)

A professional, multi-language catering website built with modern web technologies. Features responsive design, database integration, and support for 4 languages (English, Chinese, Russian, Turkish).

![Tabldot Banner](https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200&h=300&fit=crop)

## ✨ Features

### 🌍 Multi-Language Support
- **4 Languages:** English (default), Chinese (中文), Russian (Русский), Turkish (Türkçe)
- Instant language switching across all pages
- Persistent language preference using localStorage
- Complete translations for all content

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Hamburger menu for mobile/tablet devices
- Smooth transitions and animations
- Fully responsive layouts

### 🎨 Professional UI/UX
- Modern, clean design with orange color scheme
- Professional images from Pexels
- Smooth scroll behavior
- Hover effects and micro-interactions
- Loading states and error handling
- SEO optimized with meta tags

### 📄 Pages
1. **Home** - Hero section, features showcase, statistics, call-to-action
2. **Services** - Corporate catering, events, daily meals, special dietary needs
3. **Order** - Interactive order form with database integration
4. **Testimonials** - Customer reviews and ratings
5. **Health & Safety** - Food safety standards and certifications
6. **About** - Company mission, vision, and values

### 🗄️ Database Integration
- **Supabase** backend for data persistence
- Orders table for customer submissions
- Testimonials table with customer reviews
- Row Level Security (RLS) policies
- Real-time data synchronization

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.344.0** - Professional SVG icons

### Backend & Database
- **Supabase 2.57.4** - Backend as a Service (BaaS)
  - PostgreSQL database
  - Row Level Security (RLS)
  - Real-time subscriptions
  - Auto-generated REST API

### Development Tools
- **ESLint 9.9.1** - Code linting
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixes
- **TypeScript ESLint 8.3.0** - TypeScript linting rules

## 📂 Project Structure

```
tabldot/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with language switcher
│   │   └── Footer.tsx          # Footer with contact info
│   ├── pages/
│   │   ├── Home.tsx            # Homepage
│   │   ├── Services.tsx        # Services showcase
│   │   ├── Order.tsx           # Order form
│   │   ├── Testimonials.tsx    # Customer reviews
│   │   ├── Health.tsx          # Health & safety info
│   │   └── About.tsx           # About company
│   ├── i18n/
│   │   ├── translations.ts     # Translation strings
│   │   └── LanguageContext.tsx # Language state management
│   ├── lib/
│   │   └── supabase.ts         # Supabase client
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # App entry point
│   └── index.css               # Global styles & animations
├── supabase/
│   └── migrations/
│       └── *.sql               # Database migrations
├── index.html                  # HTML template with SEO
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (for database)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd tabldot
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run database migrations**

The migrations are located in `supabase/migrations/`. Apply them through your Supabase dashboard or CLI.

5. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

## 📜 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
```

## 🗃️ Database Schema

### Orders Table
```sql
- id (uuid, primary key)
- name (text, required)
- email (text, required)
- phone (text, required)
- company (text, optional)
- service (text, required)
- guests (integer, required)
- event_date (date, required)
- event_time (time, required)
- message (text, optional)
- status (text, default: 'pending')
- created_at (timestamptz)
```

### Testimonials Table
```sql
- id (uuid, primary key)
- name (text, required)
- company (text, required)
- rating (integer, 1-5, required)
- comment (text, required)
- avatar_url (text, optional)
- created_at (timestamptz)
```

## 🔒 Security

- Row Level Security (RLS) enabled on all tables
- Public users can only insert orders (form submissions)
- Public users can only read approved testimonials
- Environment variables for sensitive data
- Input validation and sanitization
- CORS headers configured

## 🎨 Design Philosophy

- **Clean & Modern:** Minimalist design with focus on content
- **Professional:** Orange color scheme suitable for food industry
- **Accessible:** High contrast ratios for readability
- **Performance:** Optimized images and lazy loading
- **Mobile-First:** Responsive across all devices
- **Smooth Animations:** Subtle transitions for better UX

## 🌐 Internationalization (i18n)

The website supports 4 languages with complete translations:

- **English (en)** - Default language
- **Chinese (zh)** - 中文
- **Russian (ru)** - Русский
- **Turkish (tr)** - Türkçe

Language preference is saved in localStorage and persists across sessions.

## 📊 Performance Optimizations

- Vite for fast builds and HMR
- Image lazy loading
- Code splitting
- Minified production builds
- Tailwind CSS purging
- Preconnect to external domains
- SEO meta tags for better search visibility

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

Copyright (c) 2025 Mutlu Kurt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 👥 Contact

**Tabldot Catering**
- Email: info@tabldot.com
- Phone: +1 (555) 123-4567
- Address: 123 Culinary Street, Food City

## 🙏 Acknowledgments

- [Pexels](https://www.pexels.com/) - Professional stock photos
- [Lucide Icons](https://lucide.dev/) - Beautiful icon set
- [Supabase](https://supabase.com/) - Backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

🌐 **Live Demo:** [https://global-catering-web-bql0.bolt.host/](https://global-catering-web-bql0.bolt.host/)
