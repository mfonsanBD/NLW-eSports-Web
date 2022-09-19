import * as Select from '@radix-ui/react-select';
import { CaretDown } from 'phosphor-react';

export interface SelectGamesData {
  id: string
  title: string
}

export interface SelectGamesProps {
  games: SelectGamesData[]
  name?: string
}

export function SelectGames({ games, name }: SelectGamesProps) {
  return (
    <Select.Root defaultValue='' name={name}>
      <Select.Trigger className='bg-zinc-900 py-3 px-4 rounded text-sm text-white flex items-center justify-between'>
        <Select.Value />
        <CaretDown size={24} />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className='bg-zinc-100 p-5 rounded'>
          <Select.ScrollUpButton />
          <Select.Viewport>

            <Select.Item value="" disabled className='py-2 px-3 text-zinc-600'>
              <Select.ItemText>Selecione o game que deseja jogar!</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>

            {games.map((game) => (
              <Select.Item value={game.id} key={game.id} className='hover:bg-violet-500 hover:text-white cursor-pointer py-2 px-3 rounded text-zinc-600'>
                <Select.ItemText>{game.title}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}