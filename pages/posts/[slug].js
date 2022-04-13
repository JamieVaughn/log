import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import Layout from '@/components/layout'
import { getPostBySlug, getAllPosts } from '@/lib/api'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import markdownToHtml from '@/lib/markdownToHtml'
import Link from 'next/link'
import prism from 'prismjs'

export default function Post({ post, readMore, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  // Apply prism in all code blocks
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Make Devs 
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
      <div className='text-center text-2xl my-16 underline'>
        <Link  href={'/posts'}>Read Another!</Link>
      </div>
    </Layout>
  )
}

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
