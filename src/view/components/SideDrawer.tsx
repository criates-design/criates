'use client'

import { useRouter } from 'next/navigation'
export default function SideDrawer() {
  const router = useRouter()

  const navigate = (path: string) => {
    router.push(path)
  }
  return (
    <div className="absolute h-full w-24 bg-criatesGray p-5 py-8 flex flex-col justify-between">
      <img src="logo.svg" />
      <div className="flex justify-between h-5/6 flex-col">
        <div className="flex flex-col p-4 gap-14">
          <button onClick={() => navigate('/dashboard')} className='hover:opacity-50'>
            <img src="dashboard-icon.svg" />
          </button>
          <button  className='hover:opacity-50'>
            <img src="edit-icon.svg" />
          </button>
          <button onClick={() => navigate('/downloads')} className='hover:opacity-50'>
            <img src="download-icon.svg" />
          </button>
          <button className='hover:opacity-50'>
            <img src="comment-icon.svg" />
          </button>
        </div>
        <div className="flex flex-col p-4 gap-10">
          <button onClick={() => navigate('/profile')} className='hover:opacity-50'>
            <img src="user.svg" />
          </button>
          <button onClick={() => navigate('/downloads')} className='hover:opacity-50'>
            <img src="exit.svg" />
          </button>
        </div>
      </div>
    </div>
  )
}
