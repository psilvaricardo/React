# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Install React's type definitions

```bash
npm install -D @types/react@19 @types/react-dom@19
```

## Install Styled Components

All you need to do to download and install styled-components run:

```bash
npm install styled-components
```

It's recommended (but not required) to also use the styled-components Babel plugin if you can. It offers many benefits like more legible class names, server-side rendering compatibility, smaller bundles, and more.

```bash
npm install --save-dev babel-plugin-styled-components
```

- https://styled-components.com/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

## Get started with Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

Using Vite:

- https://tailwindcss.com/docs/installation/using-vite


## Installing all the above in one command: 

```bash
npm install styled-components tailwindcss @tailwindcss/vite && npm install -D @types/react@19 @types/react-dom@19 babel-plugin-styled-components && npm install
```