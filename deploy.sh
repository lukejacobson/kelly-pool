#!/usr/bin/env sh

# abort on errors
set -e

npm install

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git config --global user.email "jukelacobson@gmail.com"
git config --global user.name "Luke Jacobson"

git init

git add -A
git commit -m 'deploy'

git show-ref

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

git push -f git@github.com:lukejacobson/kelly-pool.git $(git rev-parse --abbrev-ref HEAD):gh-pages

cd -

rm -rf dist