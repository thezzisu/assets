import { Plugin } from 'vite'
export default function markdown(): Plugin {
  return {
    name: 'markdown',
    enforce: 'pre',
    async transform(this, code, id, options?) {
      if (!id.endsWith('.md')) return null
      const endpoint = 'https://api.github.com/markdown'
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: code,
          mode: 'gfm',
          context: 'thezzisu/assets'
        })
      })
      const html = await resp.text()
      return {
        code: `export default ${JSON.stringify(html)}`
      }
    }
  }
}
