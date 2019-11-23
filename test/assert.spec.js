const { test } = require('tape');
const assertProcessEnv = require('../');

let counter = 0;

function getUniqueEnvName() {
	counter += 1;
	return `ENV${counter}`;
}

test('assert-process-env', t1 => {
	t1.test('load an env that exists', t => {
		const name = getUniqueEnvName();
		process.env[name] = '1';

		const ENV = assertProcessEnv(name);
		t.equal(ENV, '1', 'value is loaded');
		t.end();
	});

	t1.test('load an env that does not exist', t => {
		let asserted = false;
		const name = getUniqueEnvName();

		try {
			assertProcessEnv(name);
		} catch (e) {
			asserted = true;
		}

		t.ok(asserted, 'assertion occurs');
		t.end();
	});

	t1.test('load an env that does not exist with custom message', t => {
		let msg = '';
		const name = getUniqueEnvName();

		try {
			assertProcessEnv(name, 'AHH!');
		} catch (e) {
			msg = e.message;
		}

		t.equal(msg, 'AHH!', 'custom message is asserted');
		t.end();
	});

	t1.test('custom validation on valid env', t => {
		const name = getUniqueEnvName();

		process.env[name] = '1';
		const ENV = assertProcessEnv(name, env => env === '1');

		t.equal(ENV, '1', 'value is loaded');
		t.end();
	});

	t1.test('custom validation on invalid env', t => {
		let asserted = false;
		const name = getUniqueEnvName();

		try {
			process.env[name] = '1';
			assertProcessEnv(name, env => env === '2');
		} catch (e) {
			asserted = true;
		}

		t.ok(asserted, 'assertion occurs');
		t.end();
	});

	t1.test('custom validation on invalid env with custom message', t => {
		let msg = '';
		const name = getUniqueEnvName();

		try {
			process.env[name] = '1';
			assertProcessEnv(name, env => env === '2', 'AHH!');
		} catch (e) {
			msg = e.message;
		}

		t.equal(msg, 'AHH!', 'custom message is asserted');
		t.end();
	});
});
