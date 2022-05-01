import { Server } from 'https://deno.land/x/http@v0.1.2/mod.ts';

const server = new Server();

server.on()(({ respond, href }) => {
  const path = new URL(href).pathname;

  respond({ status: 302, headers: { location: `https://agorushkin.deno.dev${ path }` } });
});

server.listen();