import config from '/config.json' assert { type: 'json' };
import rules  from '/static.json' assert { type: 'json' };

import { HttpServer } from 'http';

import { serve, file } from 'http/utils';

const { port } = config;

const server = new HttpServer();

server.route('/public/*')(serve('./public', rules));

server.route('/'          )((await import('/server/routes/main.ts'   )).handler);
server.route('/x/:module' )((await import('/server/routes/modules.ts')).handler);
server.route('/robots.txt')(async ({ respond }) => respond(await file('./public/robots.txt')));

server.route('/*')(({ redirect }) => redirect('/'));

server.listen(port);
console.log(`Server running on port :${ port }`);