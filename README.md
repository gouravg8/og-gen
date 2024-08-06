# News Hub

This is a news hub application that allows users to view news articles from various sources.

```text
main motive of  this project is to impliment the "Open Graph" protocol to to show the preview of the news article when user share the link of the article on social media.
```

## Project Link: https://news-hub-2023.netlify.app/

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
MONGO_URI=your_mongodb_uri
or

use mine mongodb(cluster) for next few days
```

3. Install pnpm

```
npm install -g pnpm
```

4. Install dependencies:

```bash
cd backend
pnpm install

cd ../frontend
pnpm install
```

5. Run project locally:

```bash
cd backend
pnpm run dev
```

```bash
cd frontend
pnpm run dev
```

6. Hit the API endpoint: using **Postman**, **Thunder client** or any other tool to initialize the database:

```
POST http://localhost:3001/api/init-db
```

## Technical details:

- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB

## Features

- Get the all news articles from our Database
- User can get the preview of the news article when user share the link of the article on social media.
