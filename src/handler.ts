export default async function handleRequest(request: Request): Promise<Response> {
  return new Response(`request method: ${request.method}. It's ${new Date()}`);
}
