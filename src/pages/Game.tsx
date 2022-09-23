import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Heading } from "../components/Heading"
import { GameCardData } from '../components/GameCard'
import { AdCard, AdCardData } from "../components/AdCard"

import '../styles/main.css'

function Game() {
  const { id } = useParams()
  const [ads, setAds] = useState<AdCardData[]>([])
  const [game, setGame] = useState<GameCardData>()

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}games/${id}/ads`).then(response => {
      setAds(response.data)
    })
    axios(`${import.meta.env.VITE_API_URL}game/${id}`).then(response => {
      setGame(response.data)
    })
  }, [])

  const phrase = 
    ads.length === 0 
    ? 'Nunhum anúncio neste jogo.' 
    : `Este jogo tem ${ads.length} anúncio${ads.length === 1 ? '' : 's' }!`
  
 return (
  <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-0">
    <div className="bg-white w-full sm:w-[1024px] h-80 sm:h-screen relative">
      <img src={game?.bannerUrl} alt={game?.title} className="absolute object-cover w-full h-full" />
    </div>
    <div className="w-full h-screen overflow-y-auto px-8 sm:px-20 py-2">
      <Heading title={`${game?.title}`} subtitle={phrase} direction="text-left" />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
        {ads.map((ad) => (
          <AdCard data={ad} key={ad.id}/>
        ))}
      </div>
    </div>
  </div>
 )
}

export default Game