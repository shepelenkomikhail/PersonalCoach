# 🏋️ Fitness Trainer Website

A modern, responsive fitness trainer website built with React, TypeScript, and Node.js. Features online training programs, payment integration, and a sleek dark theme design.

## ✨ Features

- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all devices and screen sizes
- **Payment Integration**: Secure payment processing with Payeer
- **Online Training**: Video-based training programs and courses
- **Contact System**: Email integration for client communication
- **Dark Theme**: Professional dark theme with smooth animations
- **Multi-language Support**: Full internationalization with Russian, English, Polish, and Ukrainian languages

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library
- **EmailJS** - Email service integration
- **React i18next** - Internationalization framework
- **i18next** - Translation management

### Backend
- **Node.js** - Server runtime
- **Express** - Web framework (implied from CORS usage)
- **Crypto** - Payment signature generation
- **HTTP** - Native Node.js HTTP server

### UI Components
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Modern component library
- **Embla Carousel** - Touch-friendly carousels
- **React Responsive Carousel** - Image galleries

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

### Development

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   Server runs on `http://localhost:8080`

2. **Start the frontend development server**
   ```bash
   # In the root directory
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

### Production Build

```bash
# Build the frontend
npm run build

# Preview the build
npm run preview
```

## 📁 Project Structure

```
project/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   │   ├── sections/       # Page sections (Hero, About, etc.)
│   │   └── payments/       # Payment-related components
│   ├── lib/               # Utility libraries
│   ├── types/             # TypeScript type definitions
│   └── info/              # Static content/data
├── server/                # Backend server
│   ├── server.js          # Main server file
│   ├── package.json       # Server dependencies
│   └── Dockerfile         # Docker configuration
├── public/                # Static assets
└── package.json           # Frontend dependencies
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Payment Configuration

The payment system uses Payeer integration. Configure in `server/server.js`:

```javascript
const shopId = "your_shop_id";
const secretKey = "your_secret_key";
```

## 🚀 Deployment

### Frontend (Vercel)
The project is configured for Vercel deployment with `vercel.json`:

```bash
npm run build
vercel deploy
```

### Backend (Fly.io)
The server includes Fly.io configuration:

```bash
cd server
fly deploy
```

## 📱 Features Overview

### Main Sections
- **Hero**: Landing section with service overview
- **About**: Trainer biography and experience
- **Training Plans**: Available workout programs
- **Online Training**: Video-based training courses
- **Feedbacks**: Client testimonials
- **Contact**: Contact form and information

### Payment System
- Secure payment processing
- Order generation and tracking
- Success/failure page handling
- Payment status verification

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS** for specific animations
- **Dark theme** as the primary design
- **Responsive breakpoints** for mobile-first design

## 📧 Contact Integration

Email functionality powered by EmailJS for:
- Contact form submissions
- Training inquiries
- General communication

## 🌍 Internationalization

The website supports multiple languages:
- **Russian (ru)** - Default language
- **Polish (pl)** - For Polish-speaking users
- **Ukrainian (uk)** - For Ukrainian-speaking users

Features:
- Automatic language detection based on browser settings
- Language switcher in the navigation bar
- Persistent language selection stored in localStorage
- Complete translation of all user-facing content
- Localized feedback and training plan content

## 🔒 Security

- Payment signature verification
- CORS configuration
- Environment variable protection
- Secure API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support and inquiries, please use the contact form on the website or reach out through the provided contact information.

---

Built with ❤️ for fitness enthusiasts
