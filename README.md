# node

Script to set up a new Node project with a few important libraries, including:

- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky) and [Lint-Staged](https://github.com/okonet/lint-staged) for linting staged files upon commit
- [Jest][jest] for unit testing
- [GitHub Actions](https://www.cypress.io/) for CI

## Requirements

- Node
- [Yarn][yarn]

## Usage

Add `nodeup/bin` to your `PATH`.

```
# nodeup my-new-app-name
```

## Manual Configuration

The following steps are not yet automated, and need to be done after running the script:

- Add a `test` npm script:

```json
"scripts": {
  "test": "jest"
}
```

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
[github-actions]: https://github.com/features/actions
[jest]: https://jestjs.io/
[prettier]: https://prettier.io/
[yarn]: https://yarnpkg.com/en/docs/install
