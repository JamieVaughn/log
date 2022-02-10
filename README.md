# log

Code &amp; snippets blog

A statically generated blog to log my thoughts on coding topics and teaching web development using Next.js and Markdown

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

## Development

```
npm i
npm run dev

```

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

Add news posts in markdown format in the posts directory.

This blog-starter uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).

## Deployment

export the static site build output with

```
npm run build
```

then

```
npm run export
```

You can run `npm start` to test & check the production build output locally.

And then use github pages to host it. The export command will output the static site to `/docs`, so that github pages can identify it.

### TODO

- comment system https://tdarb.org/poormans-comment-system/
- MDX and react components for articles
- integrate uuid & mixblend & join components
- dark theme toggle
