# Space Blog Project

## Overview
The Space Blog is a Next.js project that showcases a collection of blog posts related to space and various other topics. Each blog post is displayed in a card format on the main blog page, and clicking on a card redirects the user to a detailed view of the blog post.

## Features 
- all 3 levels
- Responsive design with a grid layout for blog cards.
- Dynamic routing for blog post detail pages.
- Integration of additional blog data via JSON files.


**Open the application:**
    Open your browser and go to `http://localhost:3000`.

## JSON Data Files
### `data.json`
Contains the main blog posts data including information such as the author, publication date, title, image, summary, and full text of each blog post. This file is used to populate the blog cards on the main blog page and to provide content for the detailed blog view.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

