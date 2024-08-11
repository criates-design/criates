'use client'
import useClient from '@/lib/useClient'
import { useEffect, useState } from 'react'


export default function ProfileCredits() {
    const client = useClient()
    const requesterId = 'clz5qp4uw0000hsen1c8quesr'
    const [credits, setCredits] = useState(0)
    
    const user = async () => {
        return await client.getUserCredits(requesterId)
    }

    useEffect(() => {
        user().then((res) => {
            setCredits(res.credits ?? 0)
        })
    }, [])

    return (
        <div className="bg-criatesGreen w-[300px] h-[165px] rounded-2xl flex justify-center flex-col">
            <div className="flex flex-col gap-1 justify-center items-center font-carbona">
                <span className="text-2xl text-black font-bold mt-4">{credits}</span>
                <span>Créditos restantes</span>
                <span className="text-xs text-criatesPurple cursor-pointer">Deseja mais créditos?</span>
            </div>
        </div>
    )
}