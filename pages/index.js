import Link from 'next/link'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import PostCard from '../components/post-card'
import Svg from '../components/svg'
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
            <Svg source={'grow-blue'} height={210} width={415} style={{margin: '0 auto'}}/>
            <div className='flex flex-col justify-around align-center'>
                <Link href='/posts'>
                    <p className="text-center bg-sky-700 hover:bg-indigo-800 cursor-pointer text-white lg:w-1/3 md:w-1/2 font-bold py-2 px-4 rounded center">
                      Go to Latest Posts →
                    </p>
                </Link>
            </div>
          </Container>
          <Container className="w-2/3">
          <h2 className="mt-32 mb-4 text-3xl md:text-4xl font-bold tracking-wide tracking-tighter text-center">
            <span className='bg-sky-700 text-white p-2 rounded'>
              Featured Post
            </span>
          </h2>
            {heroPost && (
              <PostCard
                source={'robot'}
                title={heroPost.title}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
                tags={heroPost.tags}
              />
            )}
          </Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} compact/>}
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
