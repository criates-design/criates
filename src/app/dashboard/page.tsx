import MyCreditsComponent from '../../view/components/dashboard/MyCredits'
import RequestComponent from '../../view/components/dashboard/Request'
import ArtStatusComponent from '../../view/components/dashboard/ArtStatus'
import AllArtsComponent from '../../view/components/dashboard/AllArts'
import DownloadsComponent from '../../view/components/dashboard/Downloads'
import UpgradePlanComponent from '../../view/components/dashboard/UpgradePlan'

export default function Dashboard() {
    return (
            <div className='flex gap-3 flex-col'>
                <div className='flex gap-3'>
                    <MyCreditsComponent credits={40} />
                    <RequestComponent />
                </div>
                <div className='flex gap-4'>
                    <ArtStatusComponent status={'em andamento'} />
                    <ArtStatusComponent status={'concluido'} />
                    <ArtStatusComponent status={'em andamento'} />
                </div>
                <div className='flex gap-4'>
                    <AllArtsComponent />
                    <DownloadsComponent />
                    <UpgradePlanComponent />
                </div>
            </div>
    )
}