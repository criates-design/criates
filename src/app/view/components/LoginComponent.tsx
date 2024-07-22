'use client'

import clsx from 'clsx'
import useClient from '@/lib/useClient'
import { useState } from 'react'

type LoginComponentProps = {
    loginRole: 'DESIGNER' | 'USER'
}

export default function LoginComponent(LoginComponent: LoginComponentProps) {
    const client = useClient()
    const { loginRole } = LoginComponent
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (email: string, password: string) => {
        await client.login({email, password})
    }
    
    return (
        <div className={clsx('flex justify-center items-center flex-col w-[35%] h-[700px] rounded-[30px]', {
            'bg-white': loginRole === 'USER',
            'bg-criatesPurple': loginRole === 'DESIGNER',
        })}>
            <div className="flex flex-col  mt-[15%] w-[420px] h-[75%]">
                <div className="flex flex-col h-[13%] justify-between">
                    {loginRole === 'DESIGNER' &&
                        <>
                            <span className='text-2xl text-white font-medium'>Fazer login como designer</span>
                            <span className='text-sm text-criatesGreen font-extralight'>Faça login com sua conta de designer.</span>
                        </>
                    }
                    {loginRole === 'USER' &&
                        <>
                            <span className='text-2xl text-black font-medium'>Fazer login como cliente</span>
                            <span className='text-sm text-black font-extralight'>Faça login com sua conta de cliente.</span>
                        </>
                    }
                </div>

                <div className="mt-4 flex flex-col h-[220px]">
                    <input type="text" className=" input input-bordered bg-criatesGray max-w-[100%]  h-[70px]" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="input input-bordered bg-criatesGray mt-4 max-w-[100%]  h-[70px]" onChange={(e) => setPassword(e.target.value)}/>
                    <span className="btn bg-criatesGreen border-none max-w-[100%] mt-4 h-[70px] rounded-[15px]" onClick={() => handleLogin(email, password)}>
                        <span className="mr-64 text-white text-[20px] font-normal">entrar</span>
                    </span>
                </div>

                <div className=" flex h-[10%]">
                    <div className="flex items-center">
                        <input type="checkbox" className="ml-1 checkbox bg-criatesGray" />
                        <span className="mt-1 ml-2 text-sm text-gray-300">Lembrar-me</span>
                    </div>
                    <div className="flex items-center ml-auto cursor-pointer">
                        <span className="text-sm mt-1 text-criatesGreen">Esqueci a senha</span>
                    </div>
                </div>

                <div className="flex justify-center mt-auto">
                    {loginRole === 'DESIGNER' &&
                        <>
                            <span className="text-sm text-gray-200 font-extralight">Quer trabalhar com a gente?</span>
                            <span className="text-sm text-criatesGreen font-light cursor-pointer ml-2">Faça uma aplicação!</span>
                        </>
                    }
                    {loginRole === 'USER' &&
                        <>
                            <span className="text-sm text-gray-400 font-extralight">Não tem uma conta?</span>
                            <span className="text-sm text-criatesGreen font-light cursor-pointer ml-2">Registre-se!</span>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

