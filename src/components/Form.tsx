import { Dialog, DialogClose } from "@radix-ui/react-dialog";
import { Check, GameController } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox';

import { Input } from "./Form/Input";
import { SelectGames, SelectGamesProps } from "./Form/Select";

export function Form ({ games }: SelectGamesProps) {
  return (
    <form className="mt-8 flex flex-col gap-4">
      
      <div className="flex flex-col gap-2">
        <label htmlFor="game">Qual o game?</label>
        <SelectGames games={games} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="nickname">Seu nome (ou nickname)?</label>
        <Input id="nickname" placeholder="Como te chamam dentro do game?" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
          <Input id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discord">Qual seu Discord?</label>
          <Input id="discord" placeholder="Usuario#0000" />
        </div>
      </div>

      <div className="flex justify-between gap-6">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="weekDays">Quando costuma jogar?</label>
          <div className="flex items-center gap-1">
            <button 
              title="Domingo" 
              className="w-8 h-8 rounded bg-zinc-900"
            >
              D
            </button>
            <button 
              title="Segunda" 
              className="w-8 h-8 rounded bg-zinc-900"
            >
              S
            </button>
            <button 
              title="Terça" 
              className="w-8 h-8 rounded bg-zinc-900"
            >
              T
            </button>
            <button 
              title="Quarta" 
              className="w-8 h-8 rounded bg-zinc-900"
            >
              Q
            </button>
            <button 
              title="Quinta" 
              className="w-8 h-8 rounded bg-zinc-900"
            >
              Q
            </button>
            <button 
              title="Sexta" 
              className="w-8 h-8 rounded bg-zinc-900"
            >
              S
            </button>
            <button 
              title="Sábado" 
              className="w-8 h-8 rounded bg-zinc-900"
            >
              S
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="hourStart">Qual horário do dia?</label>
          <div className="flex items-center gap-1 w-full">
            <Input type="time" placeholder="De" id="hourStart" />
            <Input type="time" placeholder="Até" id="hourEnd" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
      <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
        <Checkbox.Indicator>
          <Check className="w-4 h-4 text-emerald-400" />
        </Checkbox.Indicator>
      </Checkbox.Root>
        <span className="text-sm font-normal">Costumo me conectar ao chat de voz</span>
      </div>

      <footer className="flex items-center gap-2 justify-end mt-4">
        <DialogClose
          type="button"
          className="bg-zinc-500 hover:bg-zinc-600 px-5 py-3 rounded"
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