import Container from './container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Make 🏗️ Devs
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://wjv.io"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-8 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Portfolio
            </a>
            <a
              href={`https://github.com/JamieVaughn/log`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
      <span className='absolute bottom-1 right-2'>
        graphics from <span className='underline'>
          <Link  href='https://designs.ai/graphicmaker'>designs.ai</Link>
        </span>
      </span>
    </footer>
  )
}
