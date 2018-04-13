const assert = require('assert');


const defaultMsg = key => `"${key}" is a required env variable`;

function assertProcessEnv(key, validator, message) {
	let msg = message;

	if (typeof validator === 'string') {
		msg = validator;
	}
	if (typeof msg !== 'string') {
		msg = defaultMsg(key);
	}

	const env = process.env[key];

	if (typeof validator === 'function') {
		assert(validator(env), msg);
	} else {
		assert(env !== undefined, msg);
	}

	return env;
}


// Expose as default and as a named export
module.exports = assertProcessEnv;
module.exports.assertProcessEnv = assertProcessEnv;
