# assert-process-env
Basic module to load env variables from process.env and assert they exist. Reduces boilerplate if you are loading lots of envs and performing assertions.

## Install
```shell
npm install --save assert-process-env
```

## Usage
```javascript
const assertProcessEnv = require('assert-process-env');

// Load the env and assert to assert it exists
const ENV1 = assertProcessEnv('ENV1');

// Perform custom validation
const ENV2 = assertProcessEnv('ENV2', val => ['one', 'two'].includes(val));

// Display a custom message
const ENV3 = assertProcessEnv('ENV3', 'We forget to add ENV3!');
```

### assertProcessEnv(key[, validator][, message])
- `key`: The name of your variable. Will be loaded as `process.env[key]`
- `validator`: Optional function to perform additional validation. Return true if env is valid. False otherwise.
- `message`: Optional message to display in the assertion. A default message will be used if nothing is provided.
