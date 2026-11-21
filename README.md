# fidelco.dev

The source for [fidelco.dev](https://fidelco.dev/). It's a Next.js 14 site built with Tailwind CSS and Framer Motion.

I keep the words and the layout separate. Section copy lives in `src/content/` as Markdown and JSON, so changing a project or a job entry doesn't mean digging through components.

## Run locally

```sh
npm install
npm run dev
```

The dev server starts on [http://localhost:3000](http://localhost:3000).

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with the Vercel CLI and deploys to production. The workflow needs three repository secrets: `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, and `VERCEL_TOKEN`. They are set in GitHub, not in the repo. The `main` branch requires a pull request before anything lands.

## License

MIT — see [LICENSE](LICENSE).
