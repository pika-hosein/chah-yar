# chah-yar

## MongoDB setup

Copy `.env.example` to `.env.local`, then enter your MongoDB Atlas connection string:

```env
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=chah-yar
ADMIN_API_KEY=replace-with-a-long-random-secret
```

The API stores service requests in the `contactRequests` collection and customer reviews in `reviews`.
New reviews are stored with `pending` status; only records with `approved` status are returned by `GET /api/reviews`.

To moderate reviews, send `x-admin-key` with the value of `ADMIN_API_KEY` to `GET /api/admin/reviews` or `PATCH /api/admin/reviews`.
The built-in moderation page is available at `/admin/reviews`.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
