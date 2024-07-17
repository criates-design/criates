export default function SideDrawer() {
  return (
    <div className="absolute h-full w-24 bg-criatesGray p-5 py-8 flex flex-col justify-between">
      <img src="logo.svg" />
      <div className="flex justify-between h-5/6 flex-col">
        <div className="flex flex-col p-4 gap-10">
          <button className="btn">
            <img src="dashboard-icon.svg" />
          </button>
          <button>
            <img src="comment-icon.svg" />
          </button>
          <button>
            <img src="download-icon.svg" />
          </button>
          <button>
            <img src="edit-icon.svg" />
          </button>
        </div>
        <div className="flex flex-col p-4 gap-5">
          <img src="perfil.svg" />
          <img src="exit.svg" />
        </div>
      </div>
    </div>
  )
}
