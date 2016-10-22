# Plop Node + Express generator
[Plop][Plop] generator for Node + Express apps coding in ES6.

## Requirements
The first requirement is to have isntalled [Node](https://nodejs.org/en/download/).

Then install [Plop][Plop] globally `$ npm install -g plop`.

## Usage
First, you should install the generator: `$ npm install plop-node-express`.

Create in the root of your project a `plopfile.js` with this content:

```javascript
module.exports = require('plop-node-express');
```

In the terminal, type: `$ plop`, this will be execute the generator.

Before start to develop, remember to install all the dependencies: `$ npm install`.

## Provided generator
The generator provides a fresh starting point for Node + Express project:

- [NPM](https://www.npmjs.com/) as a package manager and a task runner.
- [Babel](https://babeljs.io/) as a transpiler. **I use to work in ES6**.
- [ESLint](http://eslint.org/) as a linter.
- [Mocha](https://mochajs.org/) as a test framework, with [Chai](http://chaijs.com/) as assertion library and [Chai-http](https://github.com/chaijs/chai-http) as an extension for testing HTTP APIs.

### Commands available:

| Command | Action                                |
|---------|---------------------------------------|
| eslint  | Run ESLint on `src/` directory.       |
| test    | Run test framework.                   |
| dev     | Run the compilation (with [Babel](https://babeljs.io/) ) and a [nodemon](http://nodemon.io/) that restarts node at any change in the code. |
| build   | Run eslint task, test task, compile the code and output it at `dist/` dir. |
| start   | Run build task and start the app.     |

To run a command: `$ npm run <command>`.


[Plop]: https://github.com/amwmedia/plop