type ProfileOptionsComponentProps = {
    option: string;
}

export default function ProfileOptionsComponent(ProfileOptionsComponentProps: ProfileOptionsComponentProps) {
    const { option } = ProfileOptionsComponentProps

    return (
        <div className="bg-criatesGray w-[550px] h-[165px] cursor-pointer rounded-2xl flex items-center font-carbona font-medium">
            <img className="w-6 h-10 ml-16" src="settings.svg" />
            <span className="text-black text-lg ml-4">{option}</span>
        </div>
    )
}