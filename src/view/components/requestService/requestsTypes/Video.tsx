export default function Video() {
    return (
        <label className="form-control w-full mt-2 font-normal">
            <div className="label">
                <span className="label-text text-base font-normal">
                    Qual a duração do video em minutos?
                </span>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <input type="number" placeholder="Máximo de 30 minutos" min={1} max={30} className="input input-bordered bg-white w-[650px]  h-[60px]" />
            </div>
        </label>
    )
}