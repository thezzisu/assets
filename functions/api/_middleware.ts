export const onRequest: Handler = async ({ request, env, next }) => {
  const origin = request.headers.get('Origin')
  const valids = env.VALID_ORIGINS.split(',').map((r) => new RegExp(r))
  if (origin && !valids.some((cond) => cond.test(origin)))
    return new Response('', { status: 403 })
  const result = await next()
  const response = new Response(result.body, result)
  if (origin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.append('Vary', 'Origin')
  }
  return response
}
