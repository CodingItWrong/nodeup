# node

Script to set up a new Node project with a few important libraries, including:

- **Testing**: [Jest][jest]
- **Code Standardization:** [ESLint][eslint] and [Prettier][prettier]

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

## License

Apache-2.0

[eslint]: https://eslint.org/
[jest]: https://jestjs.io/
[prettier]: https://prettier.io/
[yarn]: https://yarnpkg.com/en/docs/install
