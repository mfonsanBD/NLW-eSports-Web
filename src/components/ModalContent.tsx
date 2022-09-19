import * as Dialog from '@radix-ui/react-dialog'
import { Form } from './Form'
import { SelectGamesProps } from './Form/Select'

export function ModalContent ({ games }: SelectGamesProps) {
  return (
    <Dialog.Content className='bg-[#2A2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[600px] shadow-lg shadow-black/30'>
      <Dialog.Title className='text-3xl font-black'>Publique um Anúncio</Dialog.Title>

      <Form games={games} />
    </Dialog.Content>
  )
}