import MyCreditsComponent from '../../view/components/dashboard/MyCredits'
import RequestComponent from '../../view/components/dashboard/Request'
import AllArtsComponent from '../../view/components/dashboard/AllArts'
import DownloadsComponent from '../../view/components/dashboard/Downloads'
import UpgradePlanComponent from '../../view/components/dashboard/UpgradePlan'
import ArtList from '@/view/components/dashboard/ArtList'

export default function Dashboard() {
    return (
            <div className='flex gap-3 flex-col'>
                <div className='flex gap-3'>
                    <MyCreditsComponent credits={40} />
                    <RequestComponent />
                </div>
                <div className='flex gap-4'>
                    <ArtList />
                </div>
                <div className='flex gap-4'>
                    <AllArtsComponent />
                    <DownloadsComponent />
                    <UpgradePlanComponent />
                </div>
            </div>
    )
}