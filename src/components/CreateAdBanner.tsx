import * as Dialog from '@radix-ui/react-dialog'

import { MagnifyingGlassPlus } from "phosphor-react"

export function CreateAdBanner() {
  return (
    <div className='bg-nlwGradient pt-1 mt-8 rounded-lg self-stretch overflow-hidden'>
      <div className='bg-[#2A2634] py-8 px-6 flex flex-col justify-between items-center sm:flex-row gap-6'>
        <div className='text-center sm:text-left'>
          <strong className='text-white text-2xl font-black block'>Não encontrou seu duo?</strong>
          <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
        </div>

        <Dialog.Trigger className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
          <MagnifyingGlassPlus size={24}/>
          Publicar Anúncio
        </Dialog.Trigger>
      </div>
  </div>
  )
}