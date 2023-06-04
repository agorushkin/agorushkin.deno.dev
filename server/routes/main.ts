import { Portfolio } from '/client/pages/main.tsx';

import { render } from 'preact/render';

import { Handler } from 'http';

export const handler: Handler = ({ respond }) => {
  respond({
    body: `<!DOCTYPE html>${ render(Portfolio()) }`,
    headers: { 'content-type': 'text/html' },
  });
};