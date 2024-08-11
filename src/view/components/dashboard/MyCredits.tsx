'use client'
import useClient from "@/lib/useClient"
import { useEffect, useState } from "react"

export default function MyCreditsComponent() {
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
        <div className='bg-criatesGray w-[540px] h-[140px] rounded-2xl flex justify-center items-center font-carbona'>
            <span className='text-black ml-8 mb-1 text-5xl font-semibold cursor-default}'>{credits}</span>
            <span className='text-black text-base ml-3 cursor-default font-light'>Créditos</span>
            <div className='bg-criatesPurple w-[47%] h-[100%] rounded-2xl rounded-tr-2xl ml-auto flex justify-center items-center cursor-pointer'>
                <span className='text-white text-xl font-medium'>Comprar Mais</span>
            </div>
        </div>
    )
}
