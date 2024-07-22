
type ArtStatusComponentProps = {
    status: 'em andamento' | 'concluido'
}

export default function ArtStatusComponent(ArtStatusComponentProps: ArtStatusComponentProps) {
    const { status } = ArtStatusComponentProps
    return (
        <div className="bg-criatesGray w-[380px] h-[370px] rounded-2xl flex justify-center items-center font-carbona">
            <div className="flex flex-col w-[80%] h-[80%]">
                <span className="text-2xl cursor-default font-medium">Arte xyz</span>
                <span className="h-[50%] mt-8 text-sm leading-6 break-words font-light">emandamento emandamento emandamentoemandamentoemandamentoemandamento</span>
                <div className='flex mt-10 items-center'>
                    {status === 'em andamento' &&
                        <span className='bg-criatesPurple w-2 h-2'></span>
                    }
                    {status === 'concluido' &&
                        <span className='bg-criatesGreen w-2 h-2'></span>
                    }
                    <span className="text-sm ml-2">{status}</span>
                </div>
            </div>
        </div>
    )
}