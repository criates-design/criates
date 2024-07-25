'use client'
import { useState } from 'react'
import RequestTypeService from './RequestTypeService'

type RequestServiceProps = {
    totalCredits: number
}

export default function RequestServiceComponent(RequestServiceProps: RequestServiceProps) {
    const { totalCredits } = RequestServiceProps
    const [credits, setCredits] = useState(0)
    const [artType, setArtType] = useState('')

    const creditsValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedArtType = event.target.value
        setArtType(selectedArtType)

        switch (artType) {
            case 'post':
                setCredits(2)
                break
            case 'story':
                setCredits(3)
                break
            case 'carrosel':
                setCredits(4)
                break
            case 'campanhaAds':
                setCredits(5)
                break
            case 'video':
                setCredits(6)
                break
            case 'identidadeVisual':
                setCredits(7)
                break
            default:
                setCredits(0)
                break
        }
    }

    return (
        <div className="flex flex-col bg-criatesGray w-[45%] h-[95%] rounded-2xl font-carbona items-center">
            <form method='dialog'>
                <button className="btn btn-sm btn-circle btn-ghost relative left-96 top-4">✕</button>
            </form>
            <div className="flex flex-col w-[80%] h-[90%] ml-8 mt-4">
                <span className="font-medium text-2xl">Solicitar Serviço</span>
                <label className="form-control w-full max-w-xs mt-5">
                    <div className="label">
                        <span className="label-text text-base font-normal">O que vamos fazer hoje?</span>
                    </div>
                    <select className="select w-[650px] h-[60px] text-[18px] px-7 mt-1" id="artType" defaultValue='' onChange={creditsValue}>
                        <option value='' disabled>Escolha uma opção</option>
                        <option value='post'>Posts para redes sociais</option>
                        <option value='story'>Story para redes sociais</option>
                        <option value='carrosel'>Carrosel para redes sociais</option>
                        <option value='campanhaAds'>Campanha de Ads</option>
                        <option value='video'>Vídeo</option>
                        <option value='identidadeVisual'>Identidade Visual</option>
                    </select>
                </label>

                <RequestTypeService type={artType} />

                <label className="form-control w-full mt-5">
                    <div className="label">
                        <span className="label-text text-xl font-medium">Briefing</span>
                    </div>
                    <textarea className="textarea h-[200px] w-[650px] bg-white mt-1"></textarea>
                </label>

                <div className='bg-criatesGreen hover:bg-hover:bg-#97A953 flex w-[250px] h-[40px] rounded-lg mt-4 justify-center items-center'>
                    <img className="w-4 cursor-pointer" src="link-alt.svg" />
                    <span className='text-sm font-medium ml-4'>Enviar arquivos adicionais</span>
                </div>

                <label className="form-control w-full mt-3 font-normal">
                    <div className="label">
                        <span className="label-text text-base font-normal">
                            Créditos a serem debitados
                        </span>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                        <div className="flex w-[650px] h-[60px] bg-white rounded-xl items-center">
                            <span className="text-lg font-medium ml-6">{credits}</span>
                            <div className="bg-black rounded-xl w-[50%] h-full ml-auto flex items-center cursor-pointer">
                                <span className="text-white font-normal text-lg ml-auto mr-10">Solicitar</span>
                            </div>
                        </div>

                    </div>
                    <div className="flex gap-6 mt-5 font-light text-sm ml-1">
                        <span className="text-gray-400">Saldo após a compra</span>
                        <span className="font-normal">{totalCredits - credits}</span>
                    </div>
                </label>
            </div>
        </div>
    )
}
