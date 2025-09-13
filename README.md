# Paws & Hearts Dog Shelter Website

A modern, responsive website for a dog shelter built with React, TypeScript, and shadcn/ui components. The website helps connect rescue dogs with loving families through an intuitive adoption process.

![Dog Shelter Website](https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🐕 Features

- **Interactive Dog Gallery**: Browse available dogs with filtering by size, gender, and other characteristics
- **Detailed Dog Profiles**: Each dog has a comprehensive profile with personality traits, medical history, and adoption details
- **Adoption Process Guide**: Step-by-step guide explaining the adoption process and requirements
- **Success Stories**: Heartwarming testimonials from adoptive families
- **Contact System**: Multi-channel contact options including forms, phone, and emergency services
- **FAQ Section**: Comprehensive answers to common adoption questions
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with shadcn/ui components for a polished, professional look

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dog-shelter-ua
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 🛠️ Built With

- **[React 19](https://react.dev/)** - Frontend framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and development server
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern UI component library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── AdoptionProcessSection/ # Adoption process information
│   ├── ContactSection/         # Contact forms and information
│   ├── DogGallerySection/      # Dog profiles and gallery
│   ├── FAQSection/             # Frequently asked questions
│   ├── Footer/                 # Website footer
│   ├── Header/                 # Navigation and header
│   ├── HeroSection/            # Landing page hero
│   └── SuccessStoriesSection/  # Adoption success stories
├── lib/
│   └── utils.ts               # Utility functions
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
└── index.css                  # Global styles
```

## 🎨 Component Architecture

This project follows a structured component organization pattern:

```
ComponentName/
├── index.ts              # Main export file
├── ComponentName.tsx     # React component logic
└── ComponentName.css     # Component-specific styles (if needed)
```

### Key Design Principles

- **Named Exports Only**: All components use named exports for better tree-shaking and consistency
- **TypeScript First**: Full type safety with comprehensive interfaces
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Built with accessible UI primitives from Radix UI
- **Component Isolation**: Each component is self-contained with its own types and logic

## 🐾 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run prepare` - Setup Husky git hooks

## 🎯 Key Sections

### 1. Hero Section

- Eye-catching landing area with shelter statistics
- Quick access to dog gallery and adoption information
- Contact details and visiting hours

### 2. Dog Gallery

- Filterable grid of available dogs
- Detailed modal views for each dog
- Pagination for large datasets
- Search and filter functionality

### 3. Adoption Process

- Step-by-step adoption guide
- Requirements and qualifications
- Interactive process timeline
- FAQ integration

### 4. Success Stories

- Carousel of adoption success stories
- Photo testimonials from families
- Interactive story navigation

### 5. Contact Section

- Multi-purpose contact form
- Shelter location and hours
- Emergency contact information
- Form validation and success feedback

### 6. FAQ Section

- Searchable knowledge base
- Categorized questions and answers
- Expandable accordion interface

## 🎨 Styling & Theming

The project uses a warm, welcoming color palette centered around amber/orange tones:

- **Primary**: Amber-600 (#D97706)
- **Secondary**: Orange-600 (#EA580C)
- **Background**: Gradient from amber-50 to orange-50
- **Text**: Gray-900 for headers, Gray-600 for body text

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS 4 with custom configuration in `tailwind.config.js`.

### TypeScript

Strict TypeScript configuration with separate configs for app and node environments:

- `tsconfig.json` - Main configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js environment settings

### ESLint

Code quality is enforced with ESLint and includes React-specific rules.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload the `dist/` folder contents to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing component structure
- Use TypeScript for all new components
- Ensure responsive design across all screen sizes
- Write meaningful commit messages
- Test your changes across different browsers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Unsplash** for the high-quality dog photos
- **Lucide** for the comprehensive icon set
- **Tailwind CSS** for the utility-first CSS framework

## 📞 Support

For support, email info@pawsandhearts.org or call (555) 123-PAWS.

---

**Made with ❤️ for our four-legged friends**
