import DateFormatter from './date-formatter'
import Link from 'next/link'

export default function PostLine({
  title,
  date,
  slug,
}) {
  return (
    <>
    <div>
      <p className="text-1xl text-slate-600 mb-0 leading-snug flex justify-between">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
        <span className='text-slate-400 text-right'>
          <DateFormatter dateString={date} />
        </span>
      </p>
    </div>
    <hr />
    </>
  )
}
