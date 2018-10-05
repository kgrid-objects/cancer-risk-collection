#!/usr/bin/env sh

REM navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m "Deployment to GitHub Pages"

git push -f https://github.com/kgrid-objects/cancer-risk-collection.git master:gh-pages
