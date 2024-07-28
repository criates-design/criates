'use client'

import RequestServiceComponent from '../../requestService/RequestServiceComponent'

export default function UnfoldComponent() {
    return (
        <div>
            <span className="rounded-3xl btn bg-criatesPurple px-10 text-white"
                onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement).showModal()}>Desdobrar</span>

            <dialog id="my_modal_1" className="modal">
                <RequestServiceComponent totalCredits={0} typeRequest={'DESDOBRAR'} />
            </dialog>

        </div>

    )
}