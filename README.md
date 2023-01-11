# About

This repository contains all of the code for the Watson Industries website.

The stack:

- [SvelteKit](https://kit.svelte.dev) for the backend+frontend
- [TailwindCSS](https://tailwindcss.com) for styling
- [DaisyUI](https://daisyui.com) for pre-made components and markup

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), then start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Architecture

The project follows a typical SvelteKit project structure. Some important notes:

- `src/lib` contains all Svelte components, as well as image assets excluding the favicon
- `src` should contain any extra TypeScript modules
- all `<script>` tags should be with the attribute `lang="ts"` and be written in TypeScript

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

This version deploys automatically to Netlify.

## Contributing

Want to help contribute to the website with content, or just improvements and new stuff? Feel free to open an Issue, a PR if it is something simple and you already know what to do!
