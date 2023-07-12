const path = require('path');
const { createApp } = require('@remix-run/serve');
const { serverBuildPath } = require('./remix.config');

const buildPath = path.resolve(process.cwd(), serverBuildPath);

const app = createApp(buildPath);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Remix App Server started at http://localhost:${port}`);
});