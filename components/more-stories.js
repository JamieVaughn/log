import PostLine from '../components/post-line'

export default function MoreStories({ posts, }) {
 
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
