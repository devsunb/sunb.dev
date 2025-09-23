#!/usr/bin/env bash

set -Eeuxo pipefail

echo "https://sunb:${LFS_PASSWORD}@lfs.sunb.dev" >~/.git-credentials
git clone --config credential.helper=store --config http.version=HTTP/1.1 https://devsunb:${GITHUB_TOKEN}@github.com/devsunb/wiki.git ../wiki
npx quartz build
