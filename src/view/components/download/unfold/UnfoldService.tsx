import { useEffect, useState } from 'react'
import { useCredits } from '../../Credits/CreditsProvider'

type UnfoldServiceProps = {
    artType: string
}

export default function UnfoldService({ artType }: UnfoldServiceProps) {
    const [isAnimated, setIsAnimated] = useState(false)
    const { setCredits } = useCredits()

    const checkBoxBoolean = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedOption = event.target.id
        const isChecked = event.target.checked

        if (selectedOption === 'okOption') {
            if (isChecked) {
                setIsAnimated(true)
                setCredits(1)
            } else {
                setIsAnimated(false)
                setCredits(0.5)
            }
        } else {
            if (isChecked) {
                setIsAnimated(false)
                setCredits(0.5)
            } else {
                setIsAnimated(true)
                setCredits(1)
            }
        }
    }

    useEffect(() => {
        if (artType === 'video') {
            setIsAnimated(true)
            setCredits(1)
        }
    }, [artType])

    return (
        <div className='flex'>
            <label className="form-control w-full mt-6 font-normal">
                <div className="label">
                    <span className="label-text text-base font-normal">
                        Qual o tamanho?
                    </span>
                </div>

                <div className="flex items-center gap-2 mt-1.5">
                    <input type="number"
                        className="input input-bordered bg-white w-[90px]  h-[35px]" />
                    <span>X</span>
                    <input type="number"
                        className="input input-bordered bg-white w-[90px]  h-[35px]" />
                </div>
            </label>

            {artType != 'video' &&
                <label className="form-control w-full mt-6 font-normal">
                    <div className="label">
                        <span className="label-text text-base font-normal">
                            O post vai ser animado?
                        </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                        <input
                            onChange={checkBoxBoolean}
                            id="okOption"
                            checked={isAnimated}
                            type="checkbox"
                            className="ml-1 checkbox checkbox-lg [--chkbg:#D3EB79] [--chkfg:white] checked:border-criatesGreen bg-white" />
                        <span className="mt-1 text-[18px] font-normal">Sim</span>

                        <input
                            type="checkbox"
                            id="notOption"
                            onChange={checkBoxBoolean}
                            className="ml-12 checkbox checkbox-lg [--chkbg:#D3EB79] [--chkfg:white] checked:border-criatesGreen bg-white"
                            checked={!isAnimated}
                        />
                        <span className="mt-1 text-[18px]">Não</span>
                    </div>
                </label>
            }
        </div>
    )
}