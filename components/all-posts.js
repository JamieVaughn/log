import { useState } from 'react'
import PostCard from '../components/post-card'

export default function AllPosts({ posts }) {
  const getPick = date => ((new Date(date).getMonth() + 1) * new Date(date).getDate()) - new Date(date).getMonth()
  const [filter, setFilter] = useState('')
  const filterPosts = e => {
    setFilter(e.target.value)
  }
  const tags = ['javascript', 'typescript', 'css', 'html', 'design', 'functional', 'react']

  return (
    <section>
      <h2 className="my-16 text-center text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        All Posts
      </h2>
      <input list='tag-filter' name='filter' id='filter' className='md:-translate-y-28 flex my-8 mx-auto md:mr-0 md text-center border-2 rounded-md' placeholder='Filter by tag' value={filter} onChange={filterPosts} />
      <datalist id='tag-filter'>
        {tags.map(tag => <option value={tag} />)}
      </datalist>
      <div className="grid grid-cols-1 justify-items-center lg:gap-x-32 gap-y-8 mb-32 lg:px-32">
        {posts.filter(p => {
          if (filter === '') return true
          const match = p.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
          return match
        }).map((post, i) => (
          <PostCard
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
            pick={getPick(post.date)}
            last={!posts[i+1]}
          />
        ))}
      </div>
    </section>
  )
}
