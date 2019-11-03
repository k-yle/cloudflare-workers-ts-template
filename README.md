# cloudflare-workers-ts-template
[![Build Status](https://travis-ci.com/k-yle/cloudflare-workers-ts-template.svg?token=cXhNq1qwFWSzBJJ5nobA&branch=master)](https://travis-ci.com/k-yle/cloudflare-workers-ts-template)
[![codecov](https://codecov.io/gh/k-yle/cloudflare-workers-ts-template/branch/master/graph/badge.svg?token=3i9vW9Arcb)](https://codecov.io/gh/k-yle/cloudflare-workers-ts-template)

⌚ A serverless (FaaS) template utilizing TypeScript on Cloudflare Workers.


# Install
```sh
npm install --global @cloudflare/wrangler

git clone https://github.com/k-yle/cloudflare-workers-ts-template
cd cloudflare-workers-ts-template

npm install
wrangler config
```

This will prompt you to login to cloudflare using a "Global API Key". Obtain this from https://dash.cloudflare.com/*/profile/api-tokens

Next up, edit the `wrangler.toml` file to include your cloudflare `account_id` and `zone_id`. Obtain these from https://dash.cloudflare.com


# Usage
```sh
# start with hot reload (opens browser window)
npm start


# build
npm run build


# run tests
npm test


# deploy to dev
npm run deploy
```

# Deployment
This template uses 3 environments: `dev`, `staging`, and `production`.

Developers can run `npm run deploy` locally to deploy to a subdomain on `*.workers.dev`.

You can also run `npm run deploy -- --env staging` to deploy to the staging domain.


The CI will automatically deploy to `production` if the tests pass.
`CF_API_KEY` and `CF_EMAIL` must be set. The token is the "Global API Key" from


This is configured in `wrangler.toml`

# DevOps
Codecov is used for code coverage. Travis runs the CI pipeline.

The CI vm must have `CF_API_KEY`, `CF_EMAIL`, and `CODECOV_TOKEN` set.
