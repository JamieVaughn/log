import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Layout from '@/components/layout'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'



// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
      <style jsx>{`
        a {
          color: tomato;
        }
      `}</style>
    </>
  )
}

const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('@/components/uuid')),
  Head,
}

export default function PostPage({ post }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{post.title}</h1>
        {post.slug && (
          <p className="description">{post.slug}</p>
        )}
      </div>
      <main>
        <MDXRemote {...post.content} components={components} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}

// export const getStaticProps = async ({ params }) => {
  // const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  // const source = fs.readFileSync(postFilePath)

  // const { content, data } = matter(source)

  // const mdxSource = await serialize(content, {
  //   // Optionally pass remark/rehype plugins
  //   mdxOptions: {
  //     remarkPlugins: [],
  //     rehypePlugins: [],
  //   },
  //   scope: data,
  // })

//   return {
//     props: {
//       source: mdxSource,
//       frontMatter: data,
//     },
//   }
// }
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  console.log('props', params, post)

  const content = await markdownToHtml(post.content || '')

  // const readMore = getRandomPost()
  return {
    props: {
      post: {
        ...post,
        content,
        // readMore,
      },
    },
  }
}


export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  console.log('paths', posts)
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
