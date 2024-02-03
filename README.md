## Sharing code between NestJS backend and React frontend typescript projects

This is a monorepo with three workspaces:

- `my-common` - Shared code
- `my-nest` - backend
- `my-react` - frontend

It was created by following https://docs.npmjs.com/cli/v10/using-npm/workspaces. Specifically, the following steps were
executed:

``` 
mkdir npmw-nr
cd npmw-nr
npm init
npm init -w my-common
nest new my-nest
npm create vite@latest -- --template react-ts
```

Then, commits were added as you see.

Note that we need to transpile `my-common` as both _CommonJS_ and _ESModule_, because NestJS uses CommonJS whereas
React
uses ESModule. For that, `tsc-multi` is used.

### Running locally

To run locally, you could use three terminals to:

1) run `tsc-multi --watch` in root
2) run `npm run dev` in _my-react_ directory
3) run `npm run dev` in _my-nest_ directory

Note that, if you do changes to common module, NestJS does not restart, where React does.

### Deploying the backend

To deploy backend as a DigitalOcean App, when creating the app, set the following

```
# Build command
npm run build --workspace=my-common --workspace=my-nest
// TODO: test, test:e2e

# Run command
npm run start:prod --workspace=my-nest
```

And, of course, set port to 3000.

### Deploying the frontend

To deploy frontend to Vercel, enter the directory as `my-react` and edit commands as below:

```
# install command
cd .. && npm install

# build command
cd .. && tsc-multi &&  npm run build --workspace my-react
OR
cd .. && tsc-multi && cd my-react && npm run build
```
