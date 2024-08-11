import { useCredits } from '../../credits/CreditsProvider'

export default function Video() {
    const { setCredits } = useCredits()

    const creditsValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        let minutes = parseInt(event.target.value)
        if (isNaN(minutes) || minutes < 1) {
            minutes = 1
        } else if (minutes > 30) {
            minutes = 30
        }
        setCredits(minutes)
    }
    return (
        <label className="form-control w-full mt-2 font-normal">
            <div className="label">
                <span className="label-text text-base font-normal">
                    Qual a duração do video em minutos?
                </span>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <input type="number" placeholder="Máximo de 30 minutos" min={1} max={30} className="input input-bordered bg-white w-[650px]  h-[60px]" 
                onChange={creditsValue}/>
            </div>
        </label>
    )
}