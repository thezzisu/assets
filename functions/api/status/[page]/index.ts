export const onRequest: Handler = async ({ params, request, env }) => {
  const url = new URL(
    `https://status.uptimerobot.com/api/getMonitorList/${params.page}`
  )
  url.search = new URL(request.url).search
  url.searchParams.set('_', '' + Date.now())
  return fetch(url.toString())
}
