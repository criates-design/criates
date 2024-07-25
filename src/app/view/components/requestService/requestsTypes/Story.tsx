import React, { useState } from 'react'

export const storyCheckBox = (): boolean => {
    const selectedOption = document.getElementById('okOption')?.id
    if (selectedOption === 'okOption') {
        return true
    } else {
        return false
    }
}

export default function Story() {
    const [isAnimated, setIsAnimated] = useState(false)

    const checkBoxBoolean = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedOption = event.target.id
        if (selectedOption === 'okOption') {
            setIsAnimated(event.target.checked)
        } else {
            setIsAnimated(!event.target.checked)
        }
    }

    return (
        <label className="form-control w-full max-w-xs mt-14 font-normal">
            <div className="label">
                <span className="label-text text-base font-normal">
                    O post vai ser animado?
                </span>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <input
                    type="checkbox"
                    id="okOption"
                    onChange={checkBoxBoolean}
                    className="ml-1 checkbox checkbox-lg [--chkbg:#D3EB79] [--chkfg:white] checked:border-criatesGreen bg-white"
                    checked={isAnimated}
                />
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
    )
}
