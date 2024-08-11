import { useCredits } from '../../Credits/CreditsProvider'

export default function Carrosel() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const { setCredits } = useCredits()

    const creditsValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const number = event.target.value
        setCredits(Number(number) * 0.5)
    }

    return (
        <label className="form-control w-full mt-2 font-normal">
            <div className="label">
                <span className="label-text text-base font-normal">
                    Quantas imagens terá o carrossel?
                </span>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <select className="select w-[650px] h-[60px] text-[18px] px-7 mt-1" id="artType" defaultValue='default' onChange={creditsValue}>
                    <option value='default' disabled>Escolha uma opção</option>
                    {numbers.map((number) => (
                        <option  key={number} value={number}>{number}</option>
                    ))}
                </select>
            </div>
        </label>
    )
}