# TV SHOWS - Vue.js Modernized Prototype

A modern, responsive TV show catalog application built with Vue.js 3, Vite, and Bulma. This project provides a sleek interface to browse, filter, and view details of popular TV series, with integrated history tracking and user authentication.

## 🚀 Modernization Highlights

This project has been recently upgraded from an old Vue CLI (Webpack) setup to a high-performance modern stack:
- **Build Tool:** [Vite 8](https://vitejs.dev/) for near-instant server starts and HMR.
- **Framework:** [Vue.js 3.5+](https://vuejs.org/) for improved reactivity and performance.
- **Styling:** [Bulma 1.0.2](https://bulma.io/) with a custom glassmorphism theme and [Inter](https://rsms.me/inter/) typography.
- **Tooling:** ESLint 10 with the new Flat Config system for robust code quality.

## ✨ Features

- **Dynamic Catalog:** Browse a wide range of TV shows with high-quality posters.
- **Advanced Filtering:** Search by title, filter by studio, or drill down by multiple genres simultaneously.
- **Rich Details:** Detailed views for shows, seasons, and episodes, including cast and plot summaries.
- **User Authentication:** Secure Sign Up and Login system (Integration with external API).
- **History Tracking:** Personalized history to keep track of watched episodes.
- **Modern UI:** Responsive design with smooth transitions, sticky navigation, and polished components.

## 🛠️ Project Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
```

### Development
```bash
# Start the development server with Hot Module Replacement
npm run dev
```
The application will be available at `http://localhost:5173/`.

### Build
```bash
# Build the project for production
npm run build

# Preview the production build locally
npm run preview
```

### Linting
```bash
# Run ESLint to verify code quality
npm run lint
```

## 📁 Project Structure

- `src/assets/` - Global styles and static assets.
- `src/components/` - Reusable Vue components (Cards, Menu, etc.).
- `src/router/` - Vue Router configuration with modernized environment handling.
- `src/store/` - Vuex store for global state management (Authentication, History).
- `src/views/` - Page-level components (Home, Details, Profile, etc.).
- `index.html` - Entry point (Vite convention).

## 📄 License
This project is for educational purposes.
