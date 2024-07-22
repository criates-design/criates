export default function ArtDownload() {
  return (
    <div className='flex flex-row bg-blue-50 p-10 gap-6'>
      <h1>Art ABCD</h1>
      <div className='flex flex-row'>
        <p>C</p>
        <p>concluida</p>
      </div>
      <div className='flex flex-row'>
        <p>Pedido feito em:</p>
        <p>10/12/2023</p>
      </div>
      <div className='flex flex-row'>
        <p>Concluido em:</p>
        <p>12/12/2023</p>
      </div>
      <div className='flex flex-row'>
        <button>Desdobrar</button>
        <button>Baixar</button>
      </div>
    </div>
  )
}
