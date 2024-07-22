import ProfileComponent from '../view/components/profile/ProfileComponent'
import ProfileOptionsComponent from '../view/components/profile/ProfileOptionsComponent'
import ProfileUpgradePlanComponent from '../view/components/profile/ProfileUpgradePlanComponent'
import SideDrawer from '../view/components/SideDrawer'
import ProfileCredits from '../view/components/profile/ProfileCredits'

export default function Profile() {
    return (
        <div className='flex h-[100vh], w-[100vw]'>
            <div>
                <SideDrawer />
            </div>

            <div className='flex justify-center items-center gap-3 h-[100vh] min-w-[100vw]'>
            <span className='relative left-[115px] bottom-[320px] text-gray-400'>Minha conta</span>
                <div>
                    <ProfileComponent />
                </div>
                <div className='flex flex-col gap-y-[25px]'>
                    <ProfileOptionsComponent option={'Editar minha conta'}  />
                    <ProfileOptionsComponent option={'Acessar seu histórico de pedidos'}  />
                    <ProfileOptionsComponent option={'Gerir a sua assinatura'}  />
                </div>
                <div className='flex flex-col gap-y-[25px]'>
                    < ProfileCredits credits={10} />
                    <ProfileUpgradePlanComponent />
                </div>
            </div>
        </div>
    )
}