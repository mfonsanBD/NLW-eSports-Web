import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, GameController } from "phosphor-react";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Input } from "./Form/Input";
import { SelectGames, SelectGamesProps } from "./Form/Select";
import axios from "axios";

export function Form ({ games }: SelectGamesProps) {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)
  
  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}games/${data.game}/ads`, {
        name: data.nickname,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel
      })

      alert('Anúncio criado com sucesso!')
    } catch (error) {
      alert(`Erro: ${error}`)
    }
  }

  return (
    <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="game">Qual o game?</label>
        <SelectGames name="game" games={games} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="nickname">Seu nome (ou nickname)?</label>
        <Input id="nickname" name="nickname" placeholder="Como te chamam dentro do game?" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
          <Input id="yearsPlaying" name="yearsPlaying" placeholder="Tudo bem ser ZERO" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discord">Qual seu Discord?</label>
          <Input id="discord" name="discord" placeholder="Usuario#0000" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-6">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="weekDays">Quando costuma jogar?</label>
          <ToggleGroup.Root 
            type="multiple" 
            className="flex items-center gap-1"
            value={weekDays}
            onValueChange={setWeekDays}
          >
            <ToggleGroup.Item
              value="0" 
              title="Domingo" 
              className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('0') ? 'bg-violet-600' : ''}`}
            >
              D
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="1" 
              title="Segunda" 
              className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('1') ? 'bg-violet-600' : ''}`}
            >
              S
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="2" 
              title="Terça" 
              className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('2') ? 'bg-violet-600' : ''}`}
            >
              T
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="3" 
              title="Quarta" 
              className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('3') ? 'bg-violet-600' : ''}`}
            >
              Q
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="4" 
              title="Quinta" 
              className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('4') ? 'bg-violet-600' : ''}`}
            >
              Q
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="5" 
              title="Sexta" 
              className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('5') ? 'bg-violet-600' : ''}`}
            >
              S
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="6" 
              title="Sábado" 
              className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('6') ? 'bg-violet-600' : ''}`}
            >
              S
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="hourStart">Qual horário do dia?</label>
          <div className="flex items-center gap-1 w-full">
            <Input type="time" placeholder="De" name="hourStart" id="hourStart" />
            <Input type="time" placeholder="Até" name="hourEnd" id="hourEnd" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <Checkbox.Root 
          className="w-6 h-6 p-1 rounded bg-zinc-900" 
          checked={useVoiceChannel}
          onCheckedChange={(checked) => {
            checked ? setUseVoiceChannel(true) : setUseVoiceChannel(false) 
          }}
        >
          <Checkbox.Indicator>
            <Check className="w-4 h-4 text-emerald-400" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span className="text-sm font-normal">Costumo me conectar ao chat de voz</span>
      </div>

      <footer className="flex items-center gap-2 justify-center sm:justify-end mt-1 sm:mt-4">
        <DialogClose
          type="button"
          className="bg-zinc-500 hover:bg-zinc-600 px-5 py-3 rounded flex-1 sm:flex-none"
        >
          Cancelar
        </DialogClose>
        <button
          className="bg-violet-500 hover:bg-violet-600 px-5 py-3 rounded flex items-center gap-3"
        >
            <GameController size={24} />
            Encontrar Duo
          </button>
      </footer>
    </form>
  )
}