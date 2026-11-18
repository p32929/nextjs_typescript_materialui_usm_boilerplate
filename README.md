# nextjs_typescript_materialui_usm_boilerplate

A ready-to-use starter for Next.js with TypeScript, Material-UI and usm-redux. Clone it and start building pages, without spending the first day wiring up the theme, server-side styles and state.

usm-redux lets you write your state as a class with decorators, instead of the usual Redux reducer boilerplate. This is the same setup as my Overmind starter, with usm-redux instead.

## What you get

1. **Next.js with TypeScript**, plus a `type-check` script.
2. **Material-UI**, with a theme set up in `_app.tsx`.
3. **usm-redux state** on top of react-redux.
4. **Server-side styles that work:** `_document.tsx` adds Material-UI's styles on the server, so pages don't flash unstyled.

## Project layout

```
pages/_app.tsx        the Redux provider and the Material-UI theme
pages/_document.tsx   adds Material-UI styles on the server
pages/index.tsx       your first page
```

## Get started

```bash
git clone https://github.com/p32929/nextjs_typescript_materialui_usm_boilerplate.git
cd nextjs_typescript_materialui_usm_boilerplate
npm install
npm run dev          # open http://localhost:3000
```

Other commands:

1. `npm run build` makes a production build.
2. `npm start` runs that build.
3. `npm run type-check` checks the TypeScript types.

## Similar starters

1. [nextjs-typescript-materialui-overmind-boilerplate](https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate): the same, with Overmind for state.
2. [nextjs_shadcn_usm_ts_boilerplate](https://github.com/p32929/nextjs_shadcn_usm_ts_boilerplate): usm-redux with shadcn/ui instead of Material-UI.
3. [react_typescript_materialui_usm_boilerplate](https://github.com/p32929/react_typescript_materialui_usm_boilerplate): the plain React version.

## License

MIT License. Copyright (c) 2020 Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are very welcome. Please open an issue first to talk about what you'd like to add or change, so we can agree on it before you spend time on a pull request. Thank you!

## You might also like

<p><a href="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/0"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/0-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/0-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (1)"></picture></a><a href="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/1"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/1-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/1-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (2)"></picture></a><br><a href="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/2"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/2-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/2-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (3)"></picture></a><a href="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/3"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/3-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/nextjs_typescript_materialui_usm_boilerplate/personal/3-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (4)"></picture></a></p>

<p><a href="https://p32929.github.io/share/?repo=nextjs_typescript_materialui_usm_boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
