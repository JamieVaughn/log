import DateFormatter from '../components/date-formatter'
import Svg from './svg'
import Link from 'next/link'

export default function PostCard({
  title,
  date,
  excerpt,
  author,
  tags,
  slug,
  pick,
  source,
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
    <div className="cursor-pointer max-w-sm w-full lg:max-w-full lg:flex hover:scale-105 transition-all duration-300">
      <div className="border lg:border-r-0 border-gray-400 lg:border-r-0 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Isometric SVG Scene">
        <Svg source={source} pick={pick} className='post-image' />
      </div>
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            {/* <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg> */}
          </p>
            <div className="text-gray-900 font-bold text-xl mb-2 hover:underline">{title}</div>
          <p className="text-gray-700 text-base ">{excerpt}</p>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex flex-wrap align-center list-none text-sm text-gray-600 flex items-center">
            {tags?.map((t, i) => (
              <li key={i+String(t)} className="flex items-center mb-0 px-4 text-gray-500">
                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" viewBox="2 2 17 17">
                  <path strokeWidth="5" d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"/>
                </svg>
                {t}</li>)
              ) ?? 'no tags'}
          </ul>
          <div className="text-sm text-slate-400 text-size-12">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}


// http://svgicons.sparkk.fr/
