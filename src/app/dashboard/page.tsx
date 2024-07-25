<<<<<<< HEAD
import MyCreditsComponent from '../view/components/dashboard/MyCredits'
import RequestComponent from '../view/components/dashboard/Request'
import ArtStatusComponent from '../view/components/dashboard/ArtStatus'
import AllArtsComponent from '../view/components/dashboard/AllArts'
import DownloadsComponent from '../view/components/dashboard/Downloads'
import UpgradePlanComponent from '../view/components/dashboard/UpgradePlan'
// import RequestServiceComponent from '../view/components/requestService/RequestServiceComponent'
import SideDrawer from '../view/components/SideDrawer'
=======
import MyCreditsComponent from '../../view/components/dashboard/MyCredits'
import RequestComponent from '../../view/components/dashboard/Request'
import ArtStatusComponent from '../../view/components/dashboard/ArtStatus'
import AllArtsComponent from '../../view/components/dashboard/AllArts'
import DownloadsComponent from '../../view/components/dashboard/Downloads'
import UpgradePlanComponent from '../../view/components/dashboard/UpgradePlan'
>>>>>>> 16e0d2851e00287a8209753dd2ac32682013ff0b

export default function Dashboard() {
    return (
            <div className='flex gap-3 flex-col'>
                <div className='flex gap-3'>
                    <MyCreditsComponent credits={10} />
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
<<<<<<< HEAD
        </div>

        // <div className='flex h-[100vh], w-[100vw]'>
        //     <div>
        //         <SideDrawer />
        //     </div>

        //     <div className='flex flex-col justify-center items-center h-[100vh] min-w-[100vw]'>
        //         < RequestServiceComponent totalCredits={200} />
        //     </div>
        // </div>
=======
>>>>>>> 16e0d2851e00287a8209753dd2ac32682013ff0b
    )
}