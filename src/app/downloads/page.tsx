import DownloadsLists from '@/view/components/download/DownloadsLists'
import SideDrawer from '@/view/components/SideDrawer'

export default function Dashboard() {
  return (
    <div className='flex h-[100vh], w-[100vw]'>
      <div>
        <SideDrawer />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 h-[100vh] min-w-[100vw]">
        <DownloadsLists />
      </div>
    </div>

  )
}
