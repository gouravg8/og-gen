# News Hub

This is a news hub application that allows users to view news articles from various sources.

> Main motive of  this project is to impliment the "Open Graph" protocol to to show the preview of the news article when user share the link of the article on social media.


### Project Link: https://og-gen-iota.vercel.app/

### Examples


![og_poster](https://github.com/user-attachments/assets/bd54f906-f82f-4b84-a903-31dade34ddd1)
  
you can verify by taking the url of any post and post over here: https://www.opengraph.xyz/

## Prerequisites

1. **Node.js and npm** installed on your machine, You can download it from the official website: https://nodejs.org/en/download
2. **Git**, you'll need it to clone the repository, you can download it from the official website: https://git-scm.com/downloads

## Installation

1. Clone the repository:

```bash
git clone https://github.com/gouravg8/og-gen.git
```

2. Make .env file and add the following environment variables:

```
# frontend
copy variables from .env.example file to .env.local file or .env
```

3. Install pnpm

```
npm install -g pnpm
```

4. Install dependencies:

```bash
pnpm install
```

5. Run project locally:

```bash
pnpm run dev
```

6. Hit the API endpoint: using **Postman**, **Thunder client** or any other tool to initialize the database:

```
POST http://localhost:3000/api/posts
```

## Technical details:

- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: NextJs(Server Actions and API endpoints)
- Database: PostgreSQL
- ORM: Prisma
- Deployed on: Vercel

## Features

- Get the all news articles from our Database
- User can get the preview of the news article when user share the link of the article on social media.
