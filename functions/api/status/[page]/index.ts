export const onRequest: PagesFunction = async ({ params, request }) => {
  const origin = request.headers.get('Origin')
  const url = new URL(
    `https://status.uptimerobot.com/api/getMonitorList/${params.page}`
  )
  url.search = new URL(request.url).search
  url.searchParams.set('_', '' + Date.now())
  const res = await fetch(url.toString())
  const response = new Response(res.body, res)
  response.headers.set('Access-Control-Allow-Origin', origin)
  response.headers.append('Vary', 'Origin')
  return response
}
