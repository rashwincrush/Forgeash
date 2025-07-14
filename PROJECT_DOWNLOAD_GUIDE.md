# ForgeAsh Technologies - Project Download Guide

## Quick Download Options

### Option 1: Direct ZIP Download
The project has been packaged as `forgeash-technologies-project.zip` in the root directory.

**To download:**
1. Look for the file `forgeash-technologies-project.zip` in your project files
2. Right-click and select "Download" or use your browser's download function
3. The ZIP contains all source code, configurations, and documentation

### Option 2: Manual File Selection
If you prefer to download specific files:

**Essential files to download:**
- `package.json` - Dependencies and scripts
- `package-lock.json` - Exact dependency versions
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Styling configuration
- `postcss.config.js` - PostCSS configuration
- `drizzle.config.ts` - Database configuration
- `components.json` - UI components configuration

**Source code directories:**
- `client/` - Complete frontend React application
- `server/` - Backend Express.js application
- `shared/` - Shared TypeScript schemas and types

**Important documentation:**
- `replit.md` - Project architecture and preferences
- `GIT_SETUP_INSTRUCTIONS.md` - Git deployment guide
- `PROJECT_DOWNLOAD_GUIDE.md` - This file

## Setting Up After Download

### 1. Install Dependencies
```bash
cd forgeash-technologies-project
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
DATABASE_URL="your_postgresql_connection_string"
NODE_ENV=development
```

### 3. Database Setup (Optional)
If you want to use PostgreSQL:
```bash
npm run db:push
```

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Features Included

### Core Features
- **Professional Website**: Complete ForgeAsh Technologies corporate site
- **Gradient Palette Selector**: 6 animated color themes (Deep Ocean, Royal Purple, Emerald Forest, Sunset Orange, Midnight Violet, Rose Gold)
- **Subliminal Programming**: Wealth attraction system with 40+ affirmations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Orbital Animations**: Sophisticated CSS animations and transitions

### Technical Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + Radix UI components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

### Development Tools
- **Hot Reloading**: Vite development server
- **Type Safety**: Full TypeScript implementation
- **Code Quality**: ESLint and Prettier configured
- **Build System**: Optimized production builds

## File Structure Overview
```
forgeash-technologies-project/
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries
│   │   └── main.tsx        # Application entry point
├── server/
│   ├── index.ts            # Express server
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage layer
│   └── vite.ts             # Vite integration
├── shared/
│   └── schema.ts           # Database schemas
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS config
└── replit.md               # Project documentation
```

## Deployment Options

### Option 1: Replit Deployment
- The project is already configured for Replit
- Use the built-in deployment features

### Option 2: Vercel Deployment
```bash
npm i -g vercel
vercel
```

### Option 3: Netlify Deployment
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Option 4: Traditional Hosting
```bash
npm run build
# Upload built files to your hosting provider
```

## Support and Maintenance

### Common Issues
1. **Dependencies**: Run `npm install` if packages are missing
2. **Database**: Configure DATABASE_URL for persistence
3. **Build Errors**: Check Node.js version (recommended: 18+)
4. **Styling**: Ensure Tailwind CSS is properly configured

### Customization
- **Colors**: Modify gradient palettes in `gradient-palette-selector.tsx`
- **Content**: Update text and images in component files
- **Animations**: Adjust timing and effects in `index.css`
- **Database**: Modify schemas in `shared/schema.ts`

### Updates
- All dependencies are locked to specific versions
- Check `package.json` for current versions
- Update dependencies carefully to maintain compatibility

## Additional Resources
- **React Documentation**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Vite**: https://vitejs.dev/
- **Drizzle ORM**: https://orm.drizzle.team/

---

**Project Created**: July 14, 2025
**Version**: 1.0.0
**Author**: ForgeAsh Technologies Development Team