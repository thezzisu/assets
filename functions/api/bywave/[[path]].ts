const BASE = `https://getnode.dksb.store/subscribe/`

export const onRequest: Handler = async ({ params, request }) => {
  return fetch(`${BASE}${(params.path as string[]).join('/')}`, request)
}
