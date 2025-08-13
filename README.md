# Humsters Preserve - Software Engineer Portfolio

This is a Next.js application serving as a software engineer's portfolio, showcasing projects, art, and contact information. It leverages Tailwind CSS for styling and Three.js (via `@react-three/fiber` and `@react-three/drei`) for interactive 3D elements.

## For Onboarders & Senior Engineers

This document provides a quick overview and essential information for getting started and contributing to the project.

### Project Structure

-   `src/app/`: Contains the main application pages. Each directory within `app` represents a route (e.g., `src/app/about/page.tsx` maps to `/about`).
-   `src/components/`: Reusable React components used across the application (e.g., `Navbar.tsx`, `ThreeScene.tsx`).
-   `public/`: Static assets like fonts and images.
-   `styles/`: Global CSS files (currently `globals.css`).

### Getting Started

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd humsters-preserve
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Font Setup (Important!):**
    This project uses a custom font, 'Departure Mono'. Please download the font files (specifically `.woff2` and `.otf`) from the official GitHub repository:
    [https://github.com/rektdeckard/departure-mono/releases/tag/v1.500](https://github.com/rektdeckard/departure-mono/releases/tag/v1.500)
    Place the downloaded `DepartureMono-Regular.woff2` and `DepartureMono-Regular.otf` files into the `public/fonts/` directory.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Key Technologies

-   **Next.js:** React framework for building server-rendered React applications.
-   **React:** JavaScript library for building user interfaces.
-   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
-   **Three.js:** A JavaScript 3D library.
-   **@react-three/fiber:** A React renderer for Three.js.
-   **@react-three/drei:** A collection of useful helpers and abstractions for `@react-three/fiber`.
-   **Framer Motion:** A production-ready motion library for React.

### Contributing

-   **Code Style:** Adhere to the existing ESLint and Prettier configurations.
-   **Component Design:** Aim for reusable and modular components.
-   **Performance:** Be mindful of performance, especially with 3D elements.
-   **Accessibility:** Ensure all new features are accessible.

### Common Tasks

-   **Building for Production:** `npm run build`
-   **Starting Production Server:** `npm run start`
-   **Linting:** `npm run lint`

### Future Enhancements

-   Implement comprehensive unit and integration tests.
-   Add more detailed content to portfolio sections.
-   Improve accessibility features.
-   Optimize 3D scene performance and add more interactive elements.
-   Implement proper error handling and loading states for dynamic content.
