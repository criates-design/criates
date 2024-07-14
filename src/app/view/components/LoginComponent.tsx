import clsx from "clsx";

type LoginComponentProps = {
    loginRole: 'DESIGNER' | 'USER';
}

export default function LoginComponent(LoginComponent: LoginComponentProps) {
    const { loginRole } = LoginComponent
    return (
        <div className={clsx('flex justify-center items-center flex-col w-[35%] h-[700px] rounded-[30px]', {
            'bg-white': loginRole === 'USER',
            'bg-criatesPurple': loginRole === 'DESIGNER',
        })}>
            <div className="flex flex-col  mt-[15%] w-[60%] h-[75%]">
                <div className="flex flex-col h-[13%] justify-between">
                    {loginRole === 'DESIGNER' &&
                        <>
                            <span className='text-2xl text-white'>Fazer login como designer</span>
                            <span className='text-sm text-black'>Faça login com sua conta de designer.</span>
                        </>
                    }
                    {loginRole === 'USER' &&
                        <>
                            <span className='text-2xl text-black'>Fazer login como cliente</span>
                            <span className='text-sm text-black'>Faça login com sua conta de cliente.</span>
                        </>
                    }
                </div>

                <div className="mt-4 flex flex-col h-[220px]">
                    <input type="text" className=" input input-bordered bg-criatesGray max-w-[100%]  h-[70px]" />
                    <input type="password" className="input input-bordered bg-criatesGray mt-4 max-w-[100%]  h-[70px]" />
                    <span className="btn bg-criatesGreen border-none max-w-[100%] mt-4 h-[70px] rounded-[15px]">
                        <span className="mr-64 text-white text-[20px] font-normal">entrar</span>
                    </span>
                </div>

                <div className=" flex h-[10%]">
                    <div className="flex items-center">
                        <input type="checkbox" className="checkbox bg-criatesGray" />
                        <span className="ml-2 text-sm text-black">Lembrar-me</span>
                    </div>
                    <div className="flex items-center ml-auto cursor-pointer">
                        <span className="text-sm text-criatesGreen">Esqueci a senha</span>
                    </div>
                </div>

                <div className="flex justify-center mt-auto">
                    {loginRole === 'DESIGNER' &&
                        <>
                            <span className="text-sm text-black">Quer trabalhar com a gente?</span>
                            <span className="text-sm text-criatesGreen cursor-pointer ml-2">Faça uma aplicação!</span>
                        </>
                    }
                    {loginRole === 'USER' &&
                        <>
                            <span className="text-sm text-black">Não tem uma conta?</span>
                            <span className="text-sm text-criatesGreen cursor-pointer ml-2">Registre-se!</span>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

