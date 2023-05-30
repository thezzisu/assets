export const onRequest: Handler = async ({ request }) => {
  const query = new URL(request.url).searchParams
  const pid = +query.get('pid')
  if (!Number.isInteger(pid))
    return new Response('{"error":"pid is required"}', { status: 400 })

  const info: any = await fetch(
    `https://www.pixiv.net/ajax/illust/${pid}`
  ).then((req) => req.json())
  const origin = info.body.urls.original
  const ext = origin.split('.').pop()
  const pages = info.body.pageCount
  const urls = Array.from({ length: pages }, (_, i) => {
    return `${origin.replace(`_p0.${ext}`, '')}_p${i}.${ext}`
  })
  return new Response(JSON.stringify({ urls, info }), {
    headers: { 'Content-Type': 'application/json' }
  })
}
