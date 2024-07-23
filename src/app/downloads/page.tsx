import SideDrawer from '../view/components/SideDrawer'
import ArtDownload from '../view/components/download/ArtDownload'

export default function Dashboard() {
  return (
    <div className='flex h-[100vh], w-[100vw]'>
      <div>
        <SideDrawer />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 h-[100vh] min-w-[100vw]">
        <div className='w-[1400px] gap-2 flex flex-col'>
          <ArtDownload status='concluido'/>
          <ArtDownload status='concluido'/>
          <ArtDownload status='concluido'/>
          <ArtDownload status='concluido'/>
          <ArtDownload status='concluido'/>
          <ArtDownload status='concluido'/>
        </div>
      </div>
    </div>

  )
}
