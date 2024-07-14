export default function SideDrawer() {
    return (
        <div className="absolute h-full w-24 bg-criatesGray p-5">
            <img src="logo.svg" />
            <div className="flex bg-red-600 flex-col p-4">
                <img src="dashboard-icon.svg" />
                <img src="comment-icon.svg" />
                <img src="download-icon.svg" />
                <img src="edit-icon.svg" />
            </div>
        </div>
    )
}