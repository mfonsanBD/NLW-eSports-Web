interface HeadingProps {
  title: string
  subtitle?: string
  featured?: string
  direction?: 'text-center' | 'text-left'
}

export function Heading ({ title, featured = '', subtitle = '', direction = 'text-center' }: HeadingProps) {
  return (
    <div className={`w-full ${direction}`}>
      <h1 className='text-6xl text-white font-black mt-20 block'>
        {title} <span className='bg-nlwGradient bg-clip-text text-transparent'>{featured}</span>
      </h1>
      <span className="text-zinc-400 block mt-3">{subtitle}</span>
    </div>
  )
}