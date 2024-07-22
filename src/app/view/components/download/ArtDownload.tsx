type ArtDownloadProps = {
    status: 'em andamento' | 'concluido'
}
export default function ArtDownload(props: ArtDownloadProps) {
  const { status } = props

  return (
    <div className='flex flex-row bg-criatesGray p-10 gap-6 rounded-3xl w-full'>
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
      <div className='flex flex-row items-center'>
        <p className="text-xs">Pedido feito em:</p>
        <p className="text-xs">10/12/2023</p>
      </div>
      <div className='flex flex-row items-center'>
        <p className="text-xs">Concluido em:</p>
        <p className="text-xs">12/12/2023</p>
      </div>
      <div className='flex flex-row gap-2'>
        <span className="rounded-3xl btn bg-criatesPurple px-10 text-white">Desdobrar</span>
        <span className="rounded-3xl btn bg-criatesGreen px-10">Baixar</span>
      </div>
    </div>
  )
}
