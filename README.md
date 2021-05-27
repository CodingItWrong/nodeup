# nodeup

Generates a new Node project with a few important libraries, including:

- [Jest](https://jestjs.io/) for unit testing
- [ESLint](https://eslint.org/) for linting
- [Prettier](https://prettier.io/) for formatting
- [Husky](https://github.com/typicode/husky) and [Lint-Staged](https://github.com/okonet/lint-staged) for linting and formatting staged files upon commit
- [GitHub Actions](https://github.com/features/actions) to run Jest tests on CI

## Requirements

- [Node](https://nodejs.org/)
- [NPM](https://npmjs.com) >= 7.1
- [Yarn](https://yarnpkg.com/en/docs/install)

## Usage

Clone the repo and add `nodeup/bin` to your path.

```
# nodeup my-new-app-name
```

Read the `README.md` added to the project for details on using that project.

## Manual Configuration

The following steps must be done manually after running `nodeup`:

- In `README.md`, replace the title and description with ones that fit your project.
- Add the following at the end of `package.json`:

```diff
     "source-map-explorer": "^2.4.2"
+  },
+  "husky": {
+    "hooks": {
+      "pre-commit": "lint-staged"
+    }
+  },
+  "lint-staged": {
+    "*.js": "eslint --max-warnings 0"
   }
 }
```

## License

Apache-2.0
