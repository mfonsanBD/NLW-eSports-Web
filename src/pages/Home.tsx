import axios from 'axios'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Heading } from '../components/Heading'
import Slider, { SliderSettings } from '../components/Slider'
import { ModalContent } from '../components/ModalContent'
import { CreateAdBanner } from '../components/CreateAdBanner'
import { GameCard, GameCardData } from '../components/GameCard'

import '../styles/main.css'
import logoImg from '/logo-esports.svg'
import { CaretLeft, CaretRight } from 'phosphor-react'


const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <CaretRight aria-label="next games" />,
  prevArrow: <CaretLeft aria-label="previous games" />
}

function Home() {
  const [games, setGames] = useState<GameCardData[]>([])

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}games`).then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className='max-w-[1280px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo eSports" />

      <Heading title='Encontre seu' featured='duo'  />

      <div className='w-full mt-16'>
        <Slider settings={settings}>
          {games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </Slider>
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

export default Home
