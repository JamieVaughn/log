import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
// import CoverImage from '../components/cover-image'
import Svg from '../components/svg'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className=" md:gap-x-16 lg:gap-x-8 mt-10 mb-20 md:mb-28">
        <div className='post-preview'>
        <Svg source={'robot'} height={410} width={815} className='post-image' style={{height: '105%', objectFit: 'cover'}} />
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg text-slate-500">
            <DateFormatter dateString={date} />
          </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
        </div>
      </div>
    </section>
  )
}
