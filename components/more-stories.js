import PostPreview from '../components/post-preview'
import PostLine from '../components/post-line'

export default function MoreStories({ posts, compact }) {
  if(compact) {
    return (
      <section>
      <h2 className="mt-32 mb-4 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        Post Archives
      </h2>
      <div className="grid grid-cols-1 mb-32 text-slate-500">
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
      <h2 className="mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        More Posts
      </h2>
      <div className="grid grid-cols-1  md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post, i) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            pick={i}
          />
        ))}
      </div>
    </section>
  )
}
