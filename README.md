# cloudflare-workers-ts-template
[![Build Status](https://github.com/k-yle/cloudflare-workers-ts-template/workflows/Build/badge.svg)](https://github.com/k-yle/cloudflare-workers-ts-template/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/88ec71c6b81cb7f07c46/test_coverage)](https://codeclimate.com/github/k-yle/cloudflare-workers-ts-template/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/88ec71c6b81cb7f07c46/maintainability)](https://codeclimate.com/github/k-yle/cloudflare-workers-ts-template/maintainability)

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
GitHub actions runs the CI pipeline. [Code Climate](https://codeclimate.com) is used for coverage & maintainability.

The CI vm must have `CF_API_KEY`, `CF_EMAIL`, and `CODECLIMATE_REPO_TOKEN` set.
