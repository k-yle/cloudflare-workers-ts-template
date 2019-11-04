/* eslint-env mocha */
import * as assert from 'assert';
import r from '../src/handler';

// test some other features of the router
r.put('/tmp', async () => new Response('ok'));
r.patch('/tmp', async () => new Response('ok'));
r.delete('/tmp', async () => new Response('ok'));

describe('handler returns response with request method', () => {
  const methods = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'];
  methods.forEach((method) => {
    it(`responds to ${method} requests`, async () => {
      const result = await r.route(new Request('/', { method }));
      const text = await result.text();
      assert.strictEqual(text.includes(method), true);
    });
  });

  it('returns a 404 correctly', async () => {
    const result = await r.route(new Request('/doesntexist', { method: 'GET' }));
    assert.strictEqual(result.status, 404);
  });

  it('supports custom 404 routes', async () => {
    r.all(async () => new Response('yeet', { status: 404 }));
    const result = await r.route(new Request('/doesntexist', { method: 'GET' }));
    assert.strictEqual(result.status, 404);
    assert.strictEqual(await result.text(), 'yeet');
  });
});

describe('the square function', () => {
  const numbers = [2, 13, 3456];
  numbers.forEach((n) => {
    it(`squares ${n} correctly`, async () => {
      const result = await r.route(new Request('/square', { method: 'POST', body: JSON.stringify({ number: n }) }));
      assert.deepEqual(await result.json(), { squared: n ** 2 });
    });
  });

  it('errors if no number provided', async () => {
    const result = await r.route(new Request('/square', { method: 'POST' }));
    assert.strictEqual(result.status, 400);
  });
});
