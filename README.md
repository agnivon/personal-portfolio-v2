# Agnivo Neogi's Portfolio (v2)

A premium, modern personal portfolio built with **Next.js 15**, **Sanity.io**, **Tailwind CSS**, and **Framer Motion**. Designed with a focus on high-fidelity aesthetics, smooth animations, and a seamless developer experience.

## ✨ Features

- 🚀 **Next.js 15 (App Router)**: Leveraging the latest features of Next.js for optimal performance and SEO.
- 🎨 **Premium UI/UX**: Crafted with a curated dark-mode palette, glassmorphism, and high-quality animations.
- 📝 **Headless CMS**: Powered by **Sanity.io** for real-time content management (Projects, Experience, Profiles, etc.).
- 💫 **Dynamic Animations**: Utilizes **Framer Motion** and specialized UI components like Spotlight, Vortex, and Background Beams.
- 🛠️ **Type Safety**: Fully typed with **TypeScript** and Sanity Typegen.
- 📱 **Responsive Design**: Completely optimized for all screen sizes.
- 🔍 **SEO Optimized**: Dynamic metadata generation for both home and project pages.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org), [React 19](https://react.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com), [Lucide React](https://lucide.dev)
- **CMS**: [Sanity.io](https://www.sanity.io)
- **Animation**: [Framer Motion](https://www.framer.com/motion/), [Three.js](https://threejs.org) (via React Three Fiber)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/), [Simple Icons](https://simpleicons.org)
- **Deployment**: [Vercel](https://vercel.com)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/agnivon/personal-portfolio-v2.git
cd personal-portfolio-v2
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
SANITY_API_READ_TOKEN=your_read_token
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app`: Next.js App Router (Site pages and Sanity Studio).
- `src/components`: Focuses on features, layouts, and reusable UI components.
- `src/sanity`: Sanity schemas, queries, and client configuration.
- `src/config`: Site-wide configuration and metadata settings.
- `public`: Static assets like icons and images.

## 📝 Content Management

The portfolio content is managed via Sanity Studio. You can access it locally at `/studio` or via the Sanity dashboard.

- **Profiles**: Personal details, social links, and bio.
- **Projects**: Portfolio projects with screenshots, tags, and links.
- **Experience**: Professional work history.
- **Skills**: Technical skill sets.

## 📄 License

This project is [MIT](./LICENSE) licensed.
