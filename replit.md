# ForgeAsh Technologies - Full Stack Application

## Overview

This is a full-stack web application for ForgeAsh Technologies, a Chennai-based AI solutions company. The application serves as a modern business website showcasing services, industry expertise, and providing contact functionality. It's built with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state, React hooks for local state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Development**: Hot reloading with Vite integration in development
- **Production**: Compiled JavaScript with esbuild

### Database & ORM
- **Database**: PostgreSQL (configured via Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared TypeScript schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password
- **Contacts Table**: Contact form submissions with name, email, company, message, and timestamp
- **Schema Validation**: Zod schemas for runtime validation and type inference

### Frontend Pages
- **Home Page**: Multi-section landing page with hero, statistics, services, and CTA
- **404 Page**: Not found page for unmatched routes
- **Component Library**: Comprehensive UI components following shadcn/ui patterns

### Backend Services
- **Storage Layer**: In-memory storage implementation with interface for future database integration
- **Contact API**: RESTful endpoints for contact form submission and retrieval
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Validation**: Client and server-side validation with Zod
- **Type Safety**: End-to-end TypeScript with shared types
- **Modern UI**: Clean, professional design with animations and hover effects
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Data Flow

1. **User Interaction**: Users interact with React components in the browser
2. **API Calls**: TanStack Query manages API calls to Express endpoints
3. **Request Processing**: Express routes handle requests with validation
4. **Data Storage**: Currently uses in-memory storage (prepared for database integration)
5. **Response Handling**: JSON responses with proper error handling
6. **UI Updates**: React components update based on API responses

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Components**: Radix UI primitives, Lucide icons, class-variance-authority
- **Backend**: Express.js, Drizzle ORM, Neon Database serverless
- **Development**: Vite, TypeScript, ESBuild, TSX

### Database & Validation
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **ORM**: drizzle-orm with drizzle-zod for validation
- **Validation**: Zod for runtime type checking and validation

### Development Tools
- **Build**: Vite for frontend, esbuild for backend compilation
- **Type Checking**: TypeScript with strict configuration
- **Linting**: Configured for modern JavaScript/TypeScript standards

## Deployment Strategy

### Development Environment
- **Frontend**: Vite development server with hot module replacement
- **Backend**: TSX for running TypeScript directly with file watching
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Integration**: Vite proxy configuration for API calls during development

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild compiles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend files in production
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: NODE_ENV=development with live reloading
- **Production**: NODE_ENV=production with optimized builds
- **Database**: DATABASE_URL environment variable required for PostgreSQL connection
- **Deployment**: Ready for deployment on platforms supporting Node.js applications

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with shared types and utilities
2. **Type Safety**: Comprehensive TypeScript usage with strict configuration
3. **Modern Stack**: Latest React patterns with server-side rendering preparation
4. **Database Abstraction**: Storage interface allows easy switching between implementations
5. **Component Design**: Reusable UI components with consistent styling patterns
6. **API Design**: RESTful endpoints with proper error handling and validation