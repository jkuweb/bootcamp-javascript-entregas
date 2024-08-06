 <h1 align="center">
🔧 Eslint - Prettier - Stylelint 🔦   </h1>

<p align="center">
  ⚡ Template config linters for React apps with TypeScript

</p>

## 👾Content👾

     "eslint": "^8.57.0"
     "prettier": "3.3.3"
     "stylelint": "^16.7.0"
     "stylelint-config-clean-order": "^6.1.0"
     "husky": "^9.1.3",
     "lint-staged": "^15.2.7",
     "npm-run-all": "^4.1.5",
     "commitlint/config-conventional": "^19.2.2"
     "@commitlint/config-conventional": "^19.2.2",
     "@commitlint/cz-commitlint": "^19.2.0",
     "@commitlint/format": "^19.3.0",

## 🍓Husky🍓

Include in package.json

```JSON
 "husky": {
  "hooks": {
   "pre-commit": "lint-staged"
  }
 },
 "lint-staged": {
  "*.{css, scss}": [
   "stylelint --fix",
   "prettier --write"
  ],
  "*.{js,jsx,tsx,ts}": [
   "eslint --fix",
   "prettier --write",
   "tsc --noEmit"
  ]
 }
```

## 🍄commitlint🍄

- commilint prompt
  <a href="https://commitlint.js.org/reference/prompt.html#prompt"> CommitLint Prompt </a>
- commitlint/config-conventional
  <a href="https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#commitlintconfig-conventional">commitlint/config-conventional<a/>

## New Project

```BASH
 npx degit jkuweb/eslint-config-template my-app
```
