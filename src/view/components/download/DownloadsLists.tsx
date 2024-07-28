'use client'
import { useEffect, useState } from 'react'
import { useAsyncCallback } from 'react-async-hook'
import ArtDownload from './ArtDownload'
import useClient from '@/lib/useClient'

export default function DownloadsLists() {
    const client = useClient()
    const requesterId = 'clz5qp4uw0000hsen1c8quesr'
    const [page, setPage] = useState(1)

    const arts = useAsyncCallback(async (page: number) => {
        return await client.getDownloadsList(page, requesterId)
    })

    useEffect(() => {
        arts.execute(page)
    }, [page])

    const nextPage = () => {
        if (page < (arts.result?.totalPages || 0)) {
            setPage(page + 1)
        }
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('pt-BR')
    }

    return (
        <div className='w-[1400px] gap-2 flex flex-col'>
            {arts.loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <div className="skeleton h-28 w-[1400px]" key={index}></div>
                ))
            ) : (
                <>
                    {arts.result?.arts.map((art: any) => (
                        <ArtDownload 
                            key={art.id} 
                            status={art.status}
                            artName={'arte'}
                            createdAt={formatDate(art.createdAt)}
                            concludedAt={formatDate(art.createdAt)}
                            downloadLink={'downloadLink'}
                        />
                    ))}
                    {Array.from({ length: Math.max(0, 6 - (arts.result?.arts.length || 0)) }).map((_, index) => (
                        <div className="h-28 w-[1400px]" key={index}></div>
                    ))}
                </>
            )}
            <div className='flex items-center gap-2 justify-end'>
                <button onClick={prevPage} disabled={page === 1}>
                    <img 
                        src="/seta.svg" 
                        className='transform rotate-180' 
                        alt="Seta para esquerda"
                    />
                </button>
                <p className='text-center text-[#ABABAB] text-xs'>página {page} de {arts.result?.totalPages}</p>
                <button onClick={nextPage} disabled={page >= (arts.result?.totalPages || 1)}>
                    <img 
                        src="/seta.svg" 
                        alt="Seta para direita"
                    />
                </button>
            </div>
        </div>
    )
}
