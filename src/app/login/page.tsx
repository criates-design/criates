import LoginComponent from '../../view/components/LoginComponent'

export default function Login() {
    return (
        <div className="flex justify-center items-center gap-6 h-[100vh] min-w-[100vw] bg-criatesGray font-carbona">
            <LoginComponent loginRole="USER"/>

            <LoginComponent loginRole="DESIGNER" />
        </div>
    )
}