import ArtDownload from './ArtDownload'

export default function DownloadsLists() {
    return (
        <div className='w-[1400px] gap-2 flex flex-col'>
          <ArtDownload status='concluido'/>
          <ArtDownload status='concluido'/>
          <ArtDownload status='concluido'/>
          <ArtDownload status='concluido'/>
          <ArtDownload status='concluido'/>
          <ArtDownload status='concluido'/>
        </div>
    )
}