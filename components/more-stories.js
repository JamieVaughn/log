// import PostPreview from '../components/post-preview'
import PostCard from '../components/post-card'
import PostLine from '../components/post-line'

export default function MoreStories({ posts, compact }) {
  if(compact) {
    return (
      <section>
      <h2 className="text-center mt-32 mb-4 text-3xl md:text-4xl font-bold tracking-wide">
        <span className='bg-sky-700 text-white p-2 rounded'>
          Post Archives
        </span>
      </h2>
      <div className="grid grid-cols-1 mb-32 text-slate-500 px-32">
        {posts.map((post, i) => (
          <PostLine
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
    )
  }
  return (
    <section>
      <h2 className="my-32 text-center text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        All Posts
      </h2>
      <div className="grid grid-cols-1 justify-items-center lg:gap-x-32 gap-y-8 mb-32 lg:px-32">
        {posts.map((post, i) => (
          // <PostPreview
          //   key={post.slug}
          //   title={post.title}
          //   coverImage={post.coverImage}
          //   date={post.date}
          //   author={post.author}
          //   slug={post.slug}
          //   excerpt={post.excerpt}
          //   tags={post.tags}
          //   pick={new Date(post.date).getDate()}
          //   last={!posts[i+1]}
          // />
          <PostCard
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
            pick={new Date(post.date).getDate()}
            last={!posts[i+1]}
          />
        ))}
      </div>
    </section>
  )
}
