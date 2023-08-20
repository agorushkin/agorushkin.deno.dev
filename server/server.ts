import config from '/config.json' assert { type: 'json' };
import rules  from '/static.json' assert { type: 'json' };

import * as http  from 'http';
import * as httpu from 'http/utils';

import { Portfolio } from '/client/pages/main.tsx';

import { render } from 'preact/render';

const { port } = config;

const server = new http.Server();

server.get('/public/*', httpu.serve('./public', rules));

server.get('/', ({ respond }) => {
  respond({
    body: `<!DOCTYPE html>${ render(Portfolio()) }`,
    headers: { 'content-type': 'text/html' },
  });
});

server.get('/x/:module', ({ respond, params: { module }, redirect }) => {
  const [ name, commit ] = module?.split('@') ?? [];

  const data = config.modules.find(module => module.name === name);

  if (!data) return respond({ status: 404 });

  const url = `https://raw.githubusercontent.com/agorushkin/${ data.repo }/${ commit ?? 'master' }/${ data.path }`;

  redirect(url);
});

server.get('/robots.txt', async ({ respond }) => respond(await httpu.file('./public/robots.txt')));

server.get('/*', ({ redirect }) => redirect('/'));

server.listen(port);
console.log(`Server running on port :${ port }`);