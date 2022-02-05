import Link from 'next/link'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href='/'>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter cursor-pointer leading-tight md:pr-8">
          Make 🏗️ Devs
        </h1>
      </Link>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Thoughts on our awesome collective web platform!
      </h4>
    </section>
  )
}
