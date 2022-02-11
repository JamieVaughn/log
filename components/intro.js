import Link from 'next/link'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter cursor-pointer leading-tight md:pr-8">
        <Link href='/'>
          Make 🏗️ Devs
        </Link>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 tracking-wider">
        Sharing observations about the web platform
      </h4>
    </section>
  )
}
