#!/bin/sh

apk update
apk add curl bash gnupg

touch $HOME/.profile

curl -o- -L https://yarnpkg.com/install.sh | bash

mkdir -p /usr/app
