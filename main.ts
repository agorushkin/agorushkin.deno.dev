import { Server } from 'https://raw.githubusercontent.com/littlemods/http-server/master/mod.ts';

const server = new Server();

server.static('/public', './frontend');

const main = server.on('/');
main(({ respond }) => {
  fetch(`file://${ Deno.cwd( ) }/frontend/pages/main/main.html`)
    .then(async (data) => respond({ body: await data.arrayBuffer(), headers: { 'content-type': 'text/html' } }))
    .catch(() => respond({ body: '<h1>Error</h1>', status: 404, headers: { 'content-type': 'text/html' } }));
});

const modules = server.on('/modules/:module', 'GET')
modules(({ params: { module }, respond }) => {
  const url = `https://raw.githubusercontent.com/littlemods/${ module }/master/mod.ts`;

  respond({ status: 302, headers: { 'location': url } });
});

server.on('/catss')(({ respond }) => respond({ headers: { location: 'https://catss.deno.dev' }, status: 302 }));

server.listen();