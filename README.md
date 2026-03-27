# 3D Interior Design Website

Premium single-page marketing website for an interior design and 3D visualization studio.

Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Highlights

- Luxury-themed responsive UI
- Animated hero section with image transitions
- About, services, gallery, testimonials, and contact sections
- Smooth in-page navigation and section-based active state
- Static pre-rendering with Next.js production build

## Tech Stack

- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI primitives

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

### Build for Production

```bash
npm run build
npm run start
```

## NPM Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run start` - Run built app
- `npm run lint` - Run Next.js lint command
- `npm run test` - Run Vitest test suite
- `npm run test:watch` - Run Vitest in watch mode

## Project Structure

```text
app/
	layout.tsx
	page.tsx
	globals.css
src/
	assets/
	components/
		HeroSection.tsx
		AboutSection.tsx
		ServicesSection.tsx
		GallerySection.tsx
		TestimonialsSection.tsx
		ContactSection.tsx
		Navbar.tsx
		Footer.tsx
```

## Deployment (Netlify)

Use the following settings when creating the site from GitHub:

- Branch to deploy: `main`
- Base directory: leave empty
- Build command: `npm run build`
- Publish directory: leave empty
- Functions directory: leave empty
- Environment variable: `NODE_VERSION=20`

If deploy fails at the "preparing repo" step with git access errors, reconnect the GitHub repository in Netlify and re-authorize Netlify GitHub access.

## Notes

- Contact form currently shows a success toast in the UI and does not send data to a backend service.
- Add analytics, form backend integration, and SEO metadata as next improvements.
