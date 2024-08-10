'use client'
import useClient from '@/lib/useClient'
import ArtList from './ArtList'
import { useAsyncCallback } from 'react-async-hook'
import { useEffect, useState } from 'react'
import { Art } from '@prisma/client'

export default function ArtsProgress() {
    const client = useClient()
    const [arts, setArts] = useState<Art[]>([])
    const requesterId = 'clz5qp4uw0000hsen1c8quesr'

    const getArts = useAsyncCallback(async () => {
        return await client.getArtsList(1,requesterId, 10)
    })

    useEffect(() => {
        getArts.execute().then(arts => {
            setArts(arts.arts)
        })
    }, [])

    const artsEmAndamento = arts.filter(art => art.status === 'em andamento')
    const artsRevisao = arts.filter(art => art.status === 'revisao')
    const artsConcluido = arts.filter(art => art.status === 'concluido')

    return (
        <div className="flex gap-16">
            <ArtList status={'em andamento'} arts={artsEmAndamento} loading={getArts.loading || !getArts}/>
            <ArtList status={'revisao'} arts={artsRevisao} loading={getArts.loading || !getArts}/>
            <ArtList status={'concluido'} arts={artsConcluido} loading={getArts.loading || !getArts}/>
        </div>
    )
}