import DateFormatter from '../components/date-formatter'
import Svg from './svg'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  excerpt,
  author,
  tags,
  slug,
  pick,
  last,
}) {
  return (
    <>
    <div className='post-preview'>
      <Svg pick={pick} className='post-image' />
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 text-slate-400">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
    {!last && <hr />}
    </>
  )
}
