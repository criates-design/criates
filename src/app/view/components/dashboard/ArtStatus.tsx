
type ArtStatusComponentProps = {
    status: 'em andamento' | 'concluido';
}

export default function ArtStatusComponent(ArtStatusComponentProps: ArtStatusComponentProps) {
    const { status } = ArtStatusComponentProps
    return (
        <div className="bg-criatesGray w-[360px] h-[350px] rounded-2xl flex justify-center items-center">
            <div className="flex flex-col w-[80%] h-[80%]">
                <span className="text-2xl cursor-default">Arte xyz</span>
                <span className="h-[50%] mt-8 text-sm break-words">emandamentoemandamentoemandamentoemandamentoemandamentoemandamento</span>
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