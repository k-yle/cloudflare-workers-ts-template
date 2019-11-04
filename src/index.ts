import r from './handler';

addEventListener('fetch', (event) => {
  event.respondWith(r.route(event.request));
});
