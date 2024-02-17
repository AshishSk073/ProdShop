This is a simple app with login and a landing page

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

Second, install the json-server to run a server for the products api fetch from db.json

```bash
npm install -g json-server
# or
yarn global add json-server
# or
pnpm install -g json-server
# or
bun global add json-server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To make sure the data is properly being fetched from db.json

```bash
json-server --watch db.json --port 3001
```