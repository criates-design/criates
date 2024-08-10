'use client'

type MyCreditsProps = {
    credits: number
}

export default function MyCreditsComponent({ credits }: MyCreditsProps) {
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
