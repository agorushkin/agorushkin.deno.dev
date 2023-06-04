import config from '/config.json' assert { type: 'json' };
import rules  from '/static.json' assert { type: 'json' };

import { HttpServer } from 'http';

import { serve, file } from 'http/utils';

const { port } = config;

const server = new HttpServer();

server.route('/public/*')(serve('./public', rules));

import { handler as main    } from '/server/routes/main.ts';
import { handler as modules } from '/server/routes/modules.ts';

server.route('/'          )(main);
server.route('/x/:module' )(modules);
server.route('/robots.txt')(async ({ respond }) => respond(await file('./public/robots.txt')));

server.route('/*')(({ redirect }) => redirect('/'));

server.listen(port);
console.log(`Server running on port :${ port }`);