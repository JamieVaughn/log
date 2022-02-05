export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center" 
    style={{transform: 'translateZ(0)', backgroundImage: 'radial-gradient(white 30%, transparent 50%)'}}
    >
      {children}
    </h1>
  )
}
