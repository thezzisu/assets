const target = `https://edgeservices.bing.com/edgediscover/query?FORM=SHORUN&udscs=1&udsnav=1&setlang=en-GB&features=udssydinternal&clientscopes=windowheader,coauthor,chat,&udsframed=1`

const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <script>
      window.location.href = window.matchMedia('(prefers-color-scheme: dark)').matches ? "${target}&darkschemeovr=1" : "${target}&lightschemeovr=1"
    </script>
  </head>
</html>`

export const onRequest: Handler = async (ctx) => {
  const prefered = ctx.request.headers.get('Sec-CH-Prefers-Color-Scheme')
  if (prefered) {
    return Response.redirect(
      target + (prefered === 'dark' ? '&darkschemeovr=1' : '&lightschemeovr=1'),
      307
    )
  } else {
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
        'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
        Vary: 'Sec-CH-Prefers-Color-Scheme',
        'Critical-CH': 'Sec-CH-Prefers-Color-Scheme'
      }
    })
  }
}
