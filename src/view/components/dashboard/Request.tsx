'use client'

import { CreditsProvider } from '../credits/CreditsProvider'
import RequestServiceComponent from '../requestService/RequestServiceComponent'

export default function RequestComponent() {
    return (
        <div className="bg-black w-[580px] h-[140px] rounded-2xl flex items-center font-carbona cursor-pointer"
            onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement).showModal()}>
            <div className="flex flex-col ml-14 gap-1">
                <span className="text-sm text-white font-extralight">Vamos trabalhar?</span>
                <span className="text-white text-2xl font-normal">Solicitar serviço</span>
            </div>

            <dialog id="my_modal_1" className="modal">
                <CreditsProvider>
                    <RequestServiceComponent typeRequest={'SOLICITAR'} />
                </CreditsProvider>
            </dialog>

        </div>

    )
}