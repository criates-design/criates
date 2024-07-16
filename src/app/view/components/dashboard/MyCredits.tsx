'use client'

import { useState } from 'react'

type MyCreditsProps = {
    credits: number
}

export default function MyCreditsComponent({ credits }: MyCreditsProps) {
    const [isCreditHidden, setIsCreditHidden] = useState(false)

    const toggleCredits = () => {
        setIsCreditHidden(!isCreditHidden)
    }

    return (
        <div className='bg-criatesGray w-[550px] h-[130px] rounded-2xl flex justify-center items-center'>
            <span className='text-black text-sm ml-10 cursor-default'>Meus créditos</span>
            <span className={`text-black ml-8 ${isCreditHidden ? 'cursor-default' : 'text-[24px] cursor-default'}`}>
                {isCreditHidden ? '--------------' : credits}
            </span>
            <div className='bg-criatesPurple w-[25%] h-[100%] rounded-2xl rounded-t-none rounded-tr-2xl ml-auto flex justify-center items-center cursor-pointer'>
                <span className='bg-black w-4 h-4 flex absolute mb-28 mr-[120px]' onClick={toggleCredits}></span>
                <span className='text-white text-xs'>Comprar mais</span>
            </div>
        </div>
    )
}
