#!/bin/bash
#sudo npm install --save-dev jsdoc-to-markdown -g
cp npmignore .npmignore
cp _README.md README.md
jsdoc2md src/index.js >> README.md

