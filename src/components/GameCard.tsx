import { Link } from "react-router-dom"

export interface GameCardData {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

interface GameCardProps {
  game: GameCardData
}

export function GameCard ({ game }: GameCardProps) {
  return (
    <Link to={`/game/${game.id}`} key={game.title} className='relative rounded-lg overflow-hidden'>
      <img src={game.bannerUrl} alt={game.title} />
      <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute left-0 bottom-0 right-0'>
        <strong className='font-bold text-white block'>{game.title}</strong>
        <span className='text-sm text-zinc-300 block'>{game._count.ads} anúncio(s)</span>
      </div>
    </Link>
  )
}