import { useEffect, useState } from 'react'
import Art, { ArtStatus } from './Art'
import { Art as ArtType } from '@prisma/client'

type ArtsListProps = {
    status: 'em andamento' | 'revisao' | 'concluido'
    arts: ArtType[]
    loading: boolean
}

export default function ArtList(props: ArtsListProps) {
    const { status, arts, loading } = props
    const [artsList, setArtsList] = useState<ArtType[]>([])

    useEffect(() => {
        if (status === 'concluido') {
            setArtsList(arts.slice(0, 4))
        } else {
            setArtsList(arts)
        }
    }, [arts])

    return (
        <div className="flex flex-col gap-5">
            <p className="text-xs text-gray-400">{status}</p>
            <div className="flex gap-2 flex-col">
                {loading && Array.from({ length: 4 }).map((_, index) => (
                    <div className="skeleton w-80 h-44" key={index} />
                ))}
                {!loading && artsList.map((art, index) => (
                    <Art key={index} name={art.id} status={art.status as ArtStatus} />
                ))}
                {!loading && status === 'concluido' && (
                    <a className="text-xs text-gray-400" href='/downloads' >Ver mais</a>
                )}
                {!loading && artsList.length === 0 && (
                    <p className="text-xs text-gray-400">Nenhum serviço no status &quot;{status}&quot;</p>
                )}
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