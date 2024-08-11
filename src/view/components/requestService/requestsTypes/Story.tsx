import React, { useState } from 'react'
import { useCredits } from '../../Credits/CreditsProvider'

export default function Story() {
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
        <label className="form-control w-full max-w-xs mt-2 font-normal">
            <div className="label">
                <span className="label-text text-base font-normal">
                    O post vai ser animado?
                </span>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <input
                    type="checkbox"
                    id="okOption"
                    onChange={handleCheckboxChange}
                    className="ml-1 checkbox checkbox-lg [--chkbg:#D3EB79] [--chkfg:white] checked:border-criatesGreen bg-white"
                    checked={selectedOption === 'okOption'}
                />
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
    )
}
