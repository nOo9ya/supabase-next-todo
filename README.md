This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## installed packages
```bash
yarn add react-spinners@^0.13.8
yarn add react-icons@^5.0.1

yarn add @supabase/supabase-js@^.2.42.0
yarn add @supabase/ssr@^0.1.0

yarn add @supabase/auth-ui-react@^0.4.7
yarn add @supabase/auth-ui-shared@^0.1.8

yarn add cookies-next@^4.1.1

yarn add sass --dev
```

```shell
npx supabase gen types --lang=typescript --project-id "project-id" --schema public > types/supabase.types.ts
```


## 구글 로그인 API
1. Google Cloud API Oauth setting [GoogleAPI](https://cloud.google.com/apis)
2. Auth UI 
 - @supabase/auth-ui-react
 - @supabase/auth-ui-shared
3. Callback Handle

---
### Sessions
#### implicit flow 
- 암시적 흐름 
- 브라우저 단 로그인 
- 서버 불필요
- 토큰을 브라우저에서 가지고 있어서 불안함 존재(access_token, refresh_token)
#### PKCE flow 
- 서버 측 로그인 후 -> 브라우저

---



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
