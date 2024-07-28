'use client'
import { useEffect, useState } from 'react'
import { useAsyncCallback } from 'react-async-hook'
import useClient from '@/lib/useClient'
import ArtStatusComponent from './ArtStatus'

export default function ArtList() {
    const client = useClient()
    const requesterId = 'clz5qp4uw0000hsen1c8quesr'
    const [page] = useState(0)

    const arts = useAsyncCallback(async (page: number) => {
        return await client.getArtsList(page, requesterId)
    })

    useEffect(() => {
        arts.execute(page)
    }, [page])

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('pt-BR')
    }

    return (
        <div className='gap-2 flex'>
            {arts.loading ? (
                Array.from({ length: 3 }).map((_, index) => (
                    <div className="skeleton h-28 w-[1400px]" key={index}></div>
                ))
            ) : (
                <>
                    {arts.result?.arts.map((art: any) => (
                        <ArtStatusComponent 
                            key={art.id} 
                            status={art.status}
                            artName={'arte'}
                            createdAt={formatDate(art.createdAt)}
                            concludedAt={formatDate(art.createdAt)}
                        />
                    ))}
                    {Array.from({ length: Math.max(0, 3 - (arts.result?.arts.length || 0)) }).map((_, index) => (
                        <div className="h-28 w-[1400px]" key={index}></div>
                    ))}
                </>
            )}
        </div>
    )
}