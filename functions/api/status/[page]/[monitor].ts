export const onRequest: Handler = async ({ params, request }) => {
  const url = new URL(
    `https://status.uptimerobot.com/api/getMonitor/${params.page}`
  )
  url.search = new URL(request.url).search
  url.searchParams.set('_', '' + Date.now())
  url.searchParams.set('m', '' + params.monitor)
  return fetch(url.toString())
}
