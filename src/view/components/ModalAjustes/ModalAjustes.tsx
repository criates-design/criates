'use client'

import { useState } from 'react'

export default function modalAjustes() {
    const [showInput, setShowInput] = useState(false)

    const handleButtonClick = () => {
        setShowInput(!showInput)
    }

    return (
        <div className="bg-criatesGray p-16 flex flex-row rounded-3xl py-14 gap-16 w-[800px] justify-between">
            <div className="relative">
                <button
                    type="button"
                    className="justify-start btn rounded-3xl bg-black gap-16 w-52 flex items-center"
                    onClick={handleButtonClick}
                >
                    <p className='text-white text-sm font-carbona'>Fazer ajustes</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" className="ml-2">
                        <path d="M4.358 8.253L0.463 0.064H1.793L5.061 6.98L8.291 0.064H9.64L5.745 8.253H4.358Z" fill="white" />
                    </svg>
                </button>
                {showInput && (
                    <div className="flex flex-col absolute top-full mt-2 bg-white p-4 rounded-md shadow-lg h-80 w-80 gap-4">
                        <textarea className="textarea textarea-bordered h-5/6 w-full" />
                        <div className="flex flex-row w-full justify-between items-center">
                            <p className="text-sm">2 Alterações restantes</p>
                            <button
                                type="button"
                                className="btn btn-sm rounded-3xl bg-black gap-16 w-32 flex items-center"
                                onClick={handleButtonClick}
                            >
                                <p className='text-white text-sm font-carbona'>Fazer ajustes</p>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <button type="submit" className="justify-start btn rounded-3xl bg-criatesGreen gap-16 w-52">
                <p className='font-light font-carbona'>Aprovar e baixar</p>
            </button>
        </div>
    )
}
