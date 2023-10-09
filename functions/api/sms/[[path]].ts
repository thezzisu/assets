const BASE = `https://sms-gateway-nine.vercel.app/api/`

export const onRequest: Handler = async ({ params, request }) => {
  return fetch(`${BASE}${(params.path as string[]).join('/')}`, request)
}
