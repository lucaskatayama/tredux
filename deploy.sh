#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy;"
    exit 0
fi

git config --global user.email "lucas@lucaskatayama.com"
git config --global user.name "Travis CI"
git checkout master
git add docs
git commit -m "chore(build): Travis Build"
git push "https://${GH_TOKEN}@${GH_REF}" master:master
