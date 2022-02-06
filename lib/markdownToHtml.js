// import { remark } from 'remark'
// import prism from 'remark-prism'
// import html from 'remark-html'
import * as commonmark from 'commonmark'
// https://github.com/commonmark/commonmark.js/

export default async function markdownToHtml(markdown) {
  // const result = await remark().use(prism).use(html).process(markdown)
  // const content = await result?.replace(/(<pre><code>)+/g, '<pre><code class="language-javascript">')

  const reader = new commonmark.Parser()
  const writer = new commonmark.HtmlRenderer()
  const parsed = reader.parse(markdown)
  const string = writer.render(parsed)

  return string
}
