export default function Post(){
    return (
        <label className="form-control w-full max-w-xs mt-14 font-normal">
        <div className="label">
            <span className="label-text text-base font-normal">
                O post vai ser animado?
            </span>
        </div>
    
        <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" className="ml-1 checkbox checkbox-lg [--chkbg:#D3EB79] [--chkfg:white] checked:border-criatesGreen bg-white" />
            <span className="mt-1 text-[18px] font-normal">Sim</span>
    
            <input type="checkbox" className="ml-12 checkbox checkbox-lg [--chkbg:#D3EB79] [--chkfg:white] checked:border-criatesGreen bg-white" />
            <span className="mt-1 text-[18px]">Não</span>
        </div>
    </label>
    )
}