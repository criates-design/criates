export default function IdentidadeVisual() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14]
    return (
        <label className="form-control w-full mt-10 font-normal">
            <div className="label">
                <span className="label-text text-base font-normal">
                    Quantos desdobramentos necessários?
                </span>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <select className="select w-[650px] h-[60px] text-[18px] px-7 mt-1" id="artType" defaultValue=''>
                    <option value='' disabled>Escolha uma opção</option>
                    {numbers.map((number) => (
                        <option key={number} value={number}>{number}</option>
                    ))}
                </select>
            </div>
        </label>
    )
}