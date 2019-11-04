import { version } from '../../package.json';

export default async function (request: Request): Promise<Response> {
  return new Response(`You are using version ${version}. ${request.method}`);
}
