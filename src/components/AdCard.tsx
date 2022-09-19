import { GameController } from "phosphor-react"
import { AdInfo } from "./AdInfo"

export interface AdCardData {
  id: string
  gameId: string
  hourEnd: string
  hourStart: string
  discord: string
  name: string
  useVoiceChannel: boolean
  weekDays: string[]
  yearsPlaying: number
}

interface AdCardProps {
  data: AdCardData
}

export function AdCard ({ data }: AdCardProps) {
  return (
    <div className="bg-[#2A2634] p-6 rounded-lg border-violet-500/30 border">
      <AdInfo 
        label="Nome" 
        value={data.name}
      />
      <AdInfo 
        label="Tempo de Jogo" 
        value={`${data.yearsPlaying} Anos`}
      />
      <AdInfo 
        label="Disponibilidade" 
        value={`${data.weekDays.length} dias | ${data.hourStart}h - ${data.hourEnd}h`} 
      />
      <AdInfo 
        label="Chamada de voz?" 
        value={data.useVoiceChannel ? 'Sim' : 'Não'} 
        color={data.useVoiceChannel ? 'text-green-400' : 'text-red-400'} 
      />

      <button
        className="bg-violet-500 hover:bg-violet-600 px-5 py-3 rounded flex items-center gap-2 text-white font-semibold w-full justify-center"
      >
        <GameController size={24} />
        Conectar
      </button>
    </div>
  )
}