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
        <div className='bg-criatesGray w-[580px] h-[140px] rounded-2xl flex justify-center items-center font-carbona'>
            <span className='text-black text-sm ml-10 cursor-default font-light'>Meus créditos</span>
            <span className={`text-black ml-8 mb-1 ${isCreditHidden ? 'cursor-default' : 'text-[24px] cursor-default'}`}>
                {isCreditHidden ? '--------------' : credits}
            </span>
            <div className='bg-criatesPurple w-[25%] h-[100%] rounded-2xl rounded-t-none rounded-tr-2xl ml-auto flex justify-center items-center cursor-pointer'>
                <div className='bg-black w-4 h-4 flex absolute mr-[129px] mb-[122px] rounded-[5px] rounded-tl-none justify-center items-center' onClick={toggleCredits}>
                    {isCreditHidden ? <img className="w-2 h-2 rounded-[3px] cursor-pointer filter invert" src="eye-crossed.svg" /> : <img className="w-2 h-2 rounded-[3px] cursor-pointer filter invert" src="eye.svg" />}
                </div>

                <span className='text-white text-xs font-light'>Comprar mais</span>
            </div>
        </div>
    )
}
