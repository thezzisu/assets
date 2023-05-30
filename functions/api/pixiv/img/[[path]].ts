export const onRequest: Handler = async ({ params, request }) => {
  const path = (params.path as string[]).join('/')
  const req = new Request(`https://i.pximg.net/${path}`, request)
  req.headers.set('Referer', 'https://www.pixiv.net/')
  return fetch(req)
}
