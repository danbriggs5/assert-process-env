# assert-process-env
Simple module that loads env variables from `process.env` and asserts they exist. Reduces boilerplate if you are loading lots of envs and performing assertions.

## Install
```shell
npm install --save assert-process-env
```

## Usage
```javascript
const assertProcessEnv = require('assert-process-env');

// Load an env and perform and assertion to ensure it exists
const ENV1 = assertProcessEnv('ENV1');

// Add a custom validator
const ENV2 = assertProcessEnv('ENV2', val => ['one', 'two'].includes(val));

// Display a custom message
const ENV3 = assertProcessEnv('ENV3', 'We forgot ENV3... Cmon...');
```

### assertProcessEnv(key[, validator][, message])
- `key`: Required. The name of your variable. Will be loaded as `process.env[key]`
- `validator`: Optional. Function to perform additional validation. Assertion will throw if a falsy value is returned.
- `message`: Optional. Message to display in the assertion. A default message will be used if nothing is provided.
