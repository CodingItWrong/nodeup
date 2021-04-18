# nodeup

Generates a new Node project with a few important libraries, including:

- [Jest][jest] for unit testing
- [ESLint][eslint] for linting
- [Prettier][prettier] for formatting
- [Husky][husky] and [Lint-Staged][lint-staged] for linting and formatting staged files upon commit
- [GitHub Actions][github-actions] to run Jest tests on CI

## Requirements

- [Node][node]
- [NPM][npm] >= 7.1
- [Yarn][yarn]

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

[eslint]: https://eslint.org/
[jest]: https://jestjs.io/
[github-actions]: https://github.com/features/actions
[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged
[node]: https://nodejs.org/
[npm]: https://npmjs.com
[prettier]: https://prettier.io/
[yarn]: https://yarnpkg.com/en/docs/install
