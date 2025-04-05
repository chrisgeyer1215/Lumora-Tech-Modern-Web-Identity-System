# Anvitha Technologies - Modern Website

A modern technology company website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive design for all device sizes
- **Animations**: Smooth animations powered by Framer Motion
- **Dark Mode**: Integrated dark mode support with system preference detection
- **Performance Optimized**: Leverages the latest Next.js features for optimal performance
- **SEO Ready**: Includes metadata configuration for better search engine visibility
- **Type-Safe**: Full TypeScript integration for better developer experience
- **Form Validation**: Uses React Hook Form and Zod for robust form handling
- **Multi-page Layout**: Includes Home, Services, About, and Contact pages
- **Component Library**: Reusable UI components for consistent design

## Pages

1. **Home Page**
   - Hero Section
   - About Section
   - Services Showcase
   - Tech Stack Display
   - Case Studies
   - Testimonials
   - Contact Form

2. **Services Page**
   - Services Hero
   - Detailed Services List with expandable items
   - Development Process Timeline
   - Tech Stack Section
   - Contact Section

3. **About Page**
   - About Hero
   - Company History/Story
   - Our Values
   - Team Members with filters
   - Contact Section

4. **Contact Page**
   - Contact Hero
   - Contact Form with validation
   - Contact Information
   - FAQ Section

## Project Structure

```
├── app/                 # Next.js app router pages
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── services/        # Services page
│   ├── contact/         # Contact page
├── components/          # Reusable UI components
│   ├── layout/          # Layout components (header, footer)
│   ├── sections/        # Global page sections
│   ├── pages/           # Page-specific components
│   └── ui/              # UI components
├── lib/                 # Utility functions
└── public/              # Static assets
```

## Technologies Used

- **Next.js 15**: The React framework for production
- **React 19**: JavaScript library for building user interfaces
- **TypeScript**: Static type-checking
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Forms with easy validation
- **Zod**: TypeScript-first schema validation
- **next-themes**: Dark mode support

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shitaanshus27/anvitha-tech-new.git
cd anvitha-tech-new
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project can be easily deployed on Vercel, Netlify, or any other platform that supports Next.js.

### Build for Production

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License.

## Acknowledgements

- Design inspiration from modern tech company websites
- Built with the latest web technologies for optimal performance and user experience