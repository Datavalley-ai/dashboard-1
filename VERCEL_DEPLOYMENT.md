# Vercel Deployment Guide

## 🚀 Quick Deploy

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set build command: `pnpm build:client`
   - Set output directory: `dist/spa`
   - Deploy!

## ⚙️ Configuration Files

### `vercel.json`
- **Rewrites**: Handles SPA routing (prevents 404 errors)
- **Build Command**: `pnpm build:client`
- **Output Directory**: `dist/spa`
- **Framework**: Vite

### `.vercelignore`
- Excludes server files (not needed for SPA)
- Excludes development dependencies
- Optimizes deployment size

## 🔧 Build Process

1. **Install dependencies**: `pnpm install`
2. **Build client**: `pnpm build:client`
3. **Output**: `dist/spa/` directory

## 🌐 Routes Supported

- `/` - Home page
- `/analytics` - Analytics page
- `/*` - All other routes (handled by React Router)

## ✅ What's Fixed

- **404 errors**: Resolved with SPA routing configuration
- **Build optimization**: Client-only build for SPA
- **Routing**: All routes now work correctly
- **Performance**: Optimized for static hosting

## 🚨 Important Notes

- This is a **client-side SPA** deployment
- Server-side features are **not available** in Vercel
- API calls should use external services
- Environment variables can be set in Vercel dashboard
