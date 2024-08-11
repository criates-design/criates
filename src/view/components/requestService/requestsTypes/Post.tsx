import { useState } from 'react'
import { useCredits } from '../../Credits/CreditsProvider'

export default function Post() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const { setCredits } = useCredits()

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const option = event.target.id

        if (selectedOption === option) {
            setSelectedOption(null)
            setCredits(0)
        } else {
            setSelectedOption(option)
            setCredits(option === 'okOption' ? 2 : 1)
        }
    }

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
                        className="input input-bordered bg-white w-[75px] h-[35px]" />
                    <span>X</span>
                    <input type="number"
                        className="input input-bordered bg-white w-[75px] h-[35px]" />
                </div>
            </label>

            <label className="form-control w-full mt-6 font-normal">
                <div className="label">
                    <span className="label-text text-base font-normal">
                        O post vai ser animado?
                    </span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <input
                        onChange={handleCheckboxChange}
                        id="okOption"
                        checked={selectedOption === 'okOption'}
                        type="checkbox"
                        className="ml-1 checkbox checkbox-lg [--chkbg:#D3EB79] [--chkfg:white] checked:border-criatesGreen bg-white" />
                    <span className="mt-1 text-[18px] font-normal">Sim</span>

                    <input
                        type="checkbox"
                        id="notOption"
                        onChange={handleCheckboxChange}
                        className="ml-12 checkbox checkbox-lg [--chkbg:#D3EB79] [--chkfg:white] checked:border-criatesGreen bg-white"
                        checked={selectedOption === 'notOption'}
                    />
                    <span className="mt-1 text-[18px]">Não</span>
                </div>
            </label>
        </div>
    )
}
