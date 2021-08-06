# Code cross-review

[![Quality assurance](https://github.com/mishamyrt/code-cross-review/actions/workflows/qa.yaml/badge.svg)](https://github.com/mishamyrt/code-cross-review/actions/workflows/qa.yaml) [![Deploy](https://github.com/mishamyrt/code-cross-review/actions/workflows/deploy.yaml/badge.svg)](https://github.com/mishamyrt/code-cross-review/actions/workflows/deploy.yaml)

The application is automated with GitHub Actions, so it's easy to deploy a copy for the team.

## How to make one for yourself?

Create a copy and publish it in three steps. After them, the page will be available at the link

### 1. Fork

Click the "Fork" button at the top of the GitHub interface and follow the instructions.

Already after this step you can see the list at the URL:

```
https://<your_username>.github.io/code-cross-review/
```

### 2. Customize team list

1. Click "Wiki" at the top of your repository on GitHub.
2. Click "Team" in the sidebar.
3. Click "Edit" at the top.

One name per line, adhering to markdown syntax.

### 3. Personalize

Open the [pull-team](./scripts/pull-team.js#L5) script in your code editor and change the username.

## Developing

Once installed dependencies with `npm install`, start a development server:

```bash
npm start

# or start the server and open the app in a new browser tab
npm start -- --open
```

## Building

```bash
npm run build
```

## License

[MIT](./LICENSE).
