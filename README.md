# Personal Portfolio & Blog Website

## 🚀 Project Overview

This is a **Personal Portfolio & Blog Website** built using **Next.js** with **TypeScript**. The project showcases my portfolio, blog posts, and allows authenticated users to manage content through a dashboard.

## 🛠️ Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** NextAuth (Social Login)
- **Deployment:** Vercel

## 📌 Features

### 1️⃣ Public Pages (Accessible to All Users)

- **Home Page (`/`)**
  - Introduction (name, bio, profile picture)
  - Skills section (icons/skill bars)
  - Featured projects
  - Resume download button
- **Projects Page (`/projects`)**
  - List of projects with images, descriptions, and links
  - Detailed project page (`/projects/[id]`)
- **Blog Page (`/blog`)**
  - List of blog posts (fetched from API/JSON file)
  - Detailed blog page (`/blog/[id]`)
- **Contact Page (`/contact`)**
  - Contact form (name, email, message)
  - Messages stored in local storage/database

### 2️⃣ Dashboard (Only for Authenticated Users)

- **Login Page (`/dashboard`)**
  - Social login with NextAuth
  - Only authenticated users can access dashboard
- **Blog Management (`/dashboard/blogs`)**
  - Create, Read, Update, Delete (CRUD) blog posts
- **Project Management (`/dashboard/projects`)**
  - CRUD operations for projects
  - Upload images, add descriptions, links, etc.
- **Message Management (`/dashboard/messages`)**
  - View messages submitted from contact form

## 🔧 Installation & Setup

### Prerequisites

- **Node.js** installed
- **MongoDB** database setup

### Steps to Run Locally

1. Clone the repository:
   ```sh
   git clone https://github.com/sheabali/portfolio-frontend.git
   cd portfolio-blog
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (`.env.local`):
   ```env
   GITHUB_ID=
   GITHUB_SECRET=
   GOOGLE_ID=
   GOOGLE_SECRET=
   BACKEND_URL=
   NEXTAUTH_SECRET=
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

## 🚀 Deployment

The project is deployed on **Vercel**. To deploy manually:

1. Push your code to GitHub.
2. Connect the repository to **Vercel**.
3. Set up environment variables in Vercel.
4. Deploy with a single click.
