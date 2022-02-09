import cn from 'classnames'
import Link from 'next/link'
import prefix from '../constants'
// import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <img
      // loader={({src, width, quality}) => `${src}`}
      src={prefix + src}
      alt={`Cover Image for ${title}`}
      className={cn('responsive shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      // layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
