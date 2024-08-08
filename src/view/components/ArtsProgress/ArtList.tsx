import Art, { ArtProps } from './Art'

type ArtsListProps = {
    status: 'em andamento' | 'revisao' | 'concluido'
    arts: ArtProps[]
}

export default function ArtList(props: ArtsListProps) {
    const { status, arts } = props

    return (
        <div className="flex flex-col gap-5">
            <p className="text-xs text-gray-400">{status}</p>
            <div className="flex gap-2 flex-col">
                {arts.map((art, index) => (
                    <Art key={index} name={art.name} status={art.status} />
                ))}
            </div>
            <button className="flex flex-row gap-2 w-40">
                <div className="bg-black text-white px-3 rounded-xl">
                    <span className="mb-2">+</span>
                </div>
                <span className="font-semibold text-sm mt-1">Solicitar Serviço</span>
            </button>
        </div>
    )
}