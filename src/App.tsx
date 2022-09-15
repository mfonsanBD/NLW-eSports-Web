import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css'

import games from './utils/games'
import logoImg from '/logo-esports.svg'

function App() {
  return (
    <div className='max-w-[1280px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo eSports" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlwGradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map((game) => (
          <a href="" key={game.title} className='relative rounded-lg overflow-hidden'>
            <img src={game.img} alt={game.title} />
            <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute left-0 bottom-0 right-0'>
              <strong className='font-bold text-white block'>{game.title}</strong>
              <span className='text-sm text-zinc-300 block'>{game.ads} anúncios</span>
            </div>
          </a>
        ))}
      </div>

      <div className='bg-nlwGradient pt-1 mt-8 rounded-lg self-stretch overflow-hidden'>
          <div className='bg-[#2A2634] py-8 px-6 flex justify-between items-center'>
            <div>
              <strong className='text-white text-2xl font-black block'>Não encontrou seu duo?</strong>
              <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
            </div>

            <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
              <MagnifyingGlassPlus size={24}/>
              Publicar Anúncio
            </button>
          </div>
      </div>
    </div>
  )
}

export default App
