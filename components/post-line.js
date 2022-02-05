import DateFormatter from '../components/date-formatter'
import Svg from './svg'
import Link from 'next/link'

export default function PostLine({
  title,
  date,
  excerpt,
  slug,
}) {
  return (
    <>
    <div>
      <h3 className="text-1xl mb-0 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
    </div>
    <hr />
    </>
  )
}
