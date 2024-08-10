import MyCreditsComponent from '../../view/components/dashboard/MyCredits'
import RequestComponent from '../../view/components/dashboard/Request'
import AllArtsComponent from '../../view/components/dashboard/AllArts'
import DownloadsComponent from '../../view/components/dashboard/Downloads'
import UpgradePlanComponent from '../../view/components/dashboard/UpgradePlan'
import ArtList from '@/view/components/dashboard/ArtList'
import getUserCredits from '@/lib/services/user/get-user-credits'

export default async function Dashboard() {
    const credits = await getUserCredits('clz5qp4uw0000hsen1c8quesr')
        return (
            <div className='flex gap-3 flex-col'>
                <div className='flex gap-3'>
                <MyCreditsComponent credits={credits ?? 0} />
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