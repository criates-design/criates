type ProfileCreditsProps = {
    credits: number
}

export default function ProfileCredits(ProfileCreditsProps: ProfileCreditsProps) {
    const { credits } = ProfileCreditsProps
    return (
        <div className="bg-criatesGreen w-[300px] h-[165px] rounded-2xl flex justify-center flex-col">
            <div className="flex flex-col gap-1 justify-center items-center font-carbona">
                <span className="text-2xl text-black font-bold mt-4">{credits}</span>
                <span>Créditos restantes</span>
                <span className="text-xs text-criatesPurple cursor-pointer">Deseja mais créditos?</span>
            </div>
        </div>
    )
}