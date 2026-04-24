# My Blog - Creative Portfolio

![App Preview](https://imgix.cosmicjs.com/df7fc9d0-4019-11f1-8d30-073df91da89f-autopilot-photo-1528127269322-539801943592-1777061529314.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern blog and creative portfolio built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 📝 Dynamic blog posts with rich content and featured images
- 👤 Author profiles with bios and photos
- 🏷️ Category organization and filtering
- 🖼️ Optimized images via imgix
- 📱 Fully responsive design
- ⚡ Server-side rendering
- 🎨 Modern UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69ebce5b5437d81e2f178855&clone_repository=69ebcf2b5437d81e2f17887f)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories. User instructions: TENZIN LEKPHEL"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: TENZIN LEKPHEL

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun or Node.js
- A Cosmic account

### Installation
```bash
bun install
bun dev
```

## Cosmic SDK Examples

```typescript
// Fetch all posts with connected data
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses three Cosmic object types: authors, categories, and posts. Posts reference authors and categories via object metafields.

## Deployment

Deploy to Vercel or Netlify. Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`.

<!-- README_END -->