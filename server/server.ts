import config from '/config.json' assert { type: 'json' };

import { render } from 'preact/render';
import { HttpServer, files } from 'http';

import { MainPage } from '/client/pages/main/main.tsx';

const { port } = config;

const server = new HttpServer();

server.plugin(files('/client', './client'));

server.route('/')(({ respond }) => respond({
  body: render(MainPage(config.projects)),
  headers: { 'content-type': 'text/html' },
}));

server.route('/x/:module', 'GET')(({ params: { module }, respond, redirect }) => {
  const data = config.modules.find(({ name }) => name === module);

  if (!data) return respond({ status: 404 });

  const url = `https://raw.githubusercontent.com/agorushkin/${ data.repo }/master/${ data.path }`;

  redirect(url);
});

server.listen(port);
console.log(`Server running on port :${ port }`);