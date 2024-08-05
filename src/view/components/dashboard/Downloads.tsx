'use client'
import { useRouter } from 'next/navigation'

export default function DownloadsComponent() {
    const router = useRouter()

    const navigate = (path: string) => {
      router.push(path)
    }
    return (
        <div className="bg-criatesGreen w-[350px] h-[130px] cursor-pointer rounded-2xl 
        flex items-center font-carbona font-medium" onClick={() => navigate('/downloads')}>
            <span className="text-black text-xl ml-auto mr-8">Acessar downloads</span>
        </div>
    )
}