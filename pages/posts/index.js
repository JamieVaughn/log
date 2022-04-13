import Container from '@/components/container'
import AllPosts from '@/components/all-posts'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'

export default function Posts({ allPosts }) {
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head><title>Make Devs Blog</title></Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <AllPosts posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags,'
  ])

  return {
    props: { allPosts },
  }
}
