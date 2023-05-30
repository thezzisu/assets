export const onRequest: Handler = async ({ request }) => {
  const query = new URL(request.url).searchParams
  const pid = +query.get('pid')
  if (!Number.isInteger(pid))
    return new Response('{"error":"pid is required"}', { status: 400 })

  const info: any = await fetch(`https://www.pixiv.net/ajax/illust/${pid}`, {
    headers: {
      'User-Agent':
        request.headers.get('User-Agent') ||
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.100.0',
      Referer: 'https://www.pixiv.net/'
    }
  }).then((req) => req.json())
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
