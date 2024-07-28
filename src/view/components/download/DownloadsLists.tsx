'use client'
import { useEffect, useState } from 'react'
import { useAsyncCallback } from 'react-async-hook'
import ArtDownload from './ArtDownload'
import useClient from '@/lib/useClient'

export default function DownloadsLists() {
    const client = useClient()
    const requesterId = 'clz5qp4uw0000hsen1c8quesr'
    const [page, setPage] = useState(1)

    const arts = useAsyncCallback(async (page) => {
        return await client.getDownloadsList(page, requesterId)
    })

    useEffect(() => {
        arts.execute(page)
    }, [page]) // Adicionar 'page' como dependência para executar novamente quando a página mudar

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

    return (
        <div className='w-[1400px] gap-2 flex flex-col'>
            {arts.result?.arts.map((art: any) => (
                <ArtDownload key={art.id} status={art.status} />
            ))}
            {(arts.status === 'not-requested' || arts.loading) && Array.from({ length: 6 }).map((_, index) => (
                <div className="skeleton h-28 w-[1400px]" key={index}></div>
            ))}
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
