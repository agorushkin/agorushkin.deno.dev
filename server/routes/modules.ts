import config from '/config.json' assert { type: 'json' };

import { Handler } from 'http';

export const handler: Handler = ({ respond, params: { module }, redirect }) => {
  const [ name, commit ] = module?.split('@') ?? [];

  const data = config.modules.find(module => module.name === name);

  if (!data) return respond({ status: 404 });

  const url = `https://raw.githubusercontent.com/agorushkin/${ data.repo }/${ commit ?? 'master' }/${ data.path }`;

  redirect(url);
};