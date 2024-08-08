import clsx from 'clsx'

export type ArtProps = {
    name: string
    status: 'em andamento' | 'revisao' | 'concluido'
}

export default function Art(props: ArtProps) {
    const { name, status } = props

    const colorByStatus = {
        'em andamento': 'bg-criatesPurple',
        'revisao': 'bg-criatesOrange',
        'concluido': 'bg-criatesNeonGreen'
    }

    return (
        <div className="bg-criatesGray p-10 gap-4 rounded-2xl w-80">
            <div className="flex flex-col gap-8">
                <p className="text-xl">{name}</p>
                <div className="flex flex-row items-center gap-2">
                    <div className="flex justify-between w-full">
                        <div className="flex items-center gap-2">
                            <div className={clsx('w-2 h-2', colorByStatus[status])}></div>
                            <p className="text-xs">{status}</p>
                        </div>
                        {status === 'revisao' && (
                            <button className='w-24 text-left pl-0 bg-criatesGreen rounded-xl p-1'>
                                <p className="text-xs ml-4">Revisar</p>
                            </button>
                        )}  
                        {status === 'concluido' && (
                            <button className='w-24 text-left pl-0 bg-criatesGreen rounded-xl p-1'>
                                <p className="text-xs ml-4">Baixar</p>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}