export default function ProfileComponent() {
    return (
        <div className="bg-criatesGray w-[450px] h-[550px] rounded-[20px] flex items-center flex-col">
            <div className="bg-white w-[85%] h-[65%] mt-10 rounded-3xl">
                <img className="w-6 h-10 ml-auto mr-6 mt-3 cursor-pointer" src="edit.svg" />
            </div>
            <div className="flex text-4xl mt-12 font-carbona font-medium">
                <span>Bem-vindo</span>
                <span className="text-criatesPurple ml-2">Victor</span>
            </div>
        </div>
    )
}