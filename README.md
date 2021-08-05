# Code cross-review

[![Quality assurance](./actions/workflows/qa.yaml/badge.svg)](./actions/workflows/qa.yaml) [![Deploy](./actions/workflows/deploy.yaml/badge.svg)](./actions/workflows/deploy.yaml)

The application is automated with GitHub Actions, so it's easy to deploy a copy for the team.

## How to make one for yourself?

Create a copy and publish it in two steps. After them, the page will be available at the link

### 1. Fork

Click the "Fork" button at the top of the GitHub interface and follow the instructions.

Already after this step you can see the list at the URL:

```
https://<your_username>.github.io/code-cross-review/
```

### 2. Customize team list

Go to the [team list page](./wiki/Team), click "Edit" and change the names to yours. One name per line, adhering to markdown syntax.

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
