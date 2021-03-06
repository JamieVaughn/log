import prefix from '../constants'

export default function Avatar({ name = 'Jamie Vaughn', picture = 'authors/jj.jpeg' }) {
  return (
    <div className="flex items-center">
      <img src={prefix + picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
