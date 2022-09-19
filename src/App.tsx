import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Heading } from './components/Heading'
import { GameCard, GameCardData } from './components/GameCard'
import { CreateAdBanner } from './components/CreateAdBanner'

import './styles/main.css'

import logoImg from '/logo-esports.svg'
import { ModalContent } from './components/ModalContent'

function App() {
  const [games, setGames] = useState<GameCardData[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className='max-w-[1280px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo eSports" />

      <Heading />

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/70 inset-0 fixed' />

          <ModalContent games={games} />
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
