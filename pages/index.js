import Link from 'next/link'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Avatar from '../components/avatar'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head><title>Make Devs Blog</title></Head>
        <Container>
          <Intro />
          <Container>
            <div className='flex flex-col justify-around align-center' style={{height: '12rem'}}>
              <Avatar />
              <Link href='posts'>
                <button className="bg-teal-600 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded">
                  Go to Latest Posts →
                </button>
              </Link>
            </div>
          </Container>
          {morePosts.length > 0 && <MoreStories posts={[heroPost, ...morePosts]} compact/>}
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
  ])

  return {
    props: { allPosts },
  }
}
