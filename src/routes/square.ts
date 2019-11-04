export default async function (request: Request): Promise<Response> {
  try {
    const { number } = await request.json();
    return new Response(JSON.stringify({
      squared: number ** 2,
    }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (err) {
    return new Response('Bad request', { status: 400 });
  }
}
