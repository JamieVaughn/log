import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <div className="-mb-36 md:-mb-36 sm:-mx-8">
        <CoverImage title={title} src={coverImage} height={160} width={310} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg flex justify-around" style={{transform: 'translateZ(0)'}}>
        <DateFormatter dateString={date} />
        <Avatar picture={author.picture} />
      </div>
    </>
  )
}
