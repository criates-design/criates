import UnfoldComponent from './unfold/UnfoldComponent'

type ArtDownloadProps = {
    status: 'em andamento' | 'concluido'
}
export default function ArtDownload(props: ArtDownloadProps) {
  const { status } = props

  return (
    <div className='flex flex-row bg-criatesGray py-8 px-10 gap-4 rounded-3xl w-full justify-between'>
      <span className="text-2xl cursor-default font-medium">Arte xyz</span>
      <div className='flex items-center'>
        {status === 'em andamento' &&
          <span className='bg-criatesPurple w-2 h-2'></span>
        }
        {status === 'concluido' &&
          <span className='bg-criatesGreen w-2 h-2'></span>
        }
        <span className="text-sm ml-2">{status}</span>
      </div>
      <div className="flex flex-row justify-between gap-6">
      <div className='flex flex-row items-center gap-1'>
        <p className="text-xs text-gray-600">Pedido feito em </p>
        <p className="text-xs font-bold">10/12/2023</p>
      </div>
      <div className='flex flex-row items-center gap-1'>
        <p className="text-xs text-gray-600">Concluido em </p>
        <p className="text-xs font-bold">12/12/2023</p>
      </div>
      </div>
      <div className='flex flex-row gap-2'>
        <UnfoldComponent />
        <span className="rounded-3xl btn bg-criatesGreen px-10">Baixar</span>
      </div>
    </div>
  )
}
