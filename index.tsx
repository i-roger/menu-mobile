'use client'
import './App.css'

function App() {

  const abrir = () => {
    const menu = document.getElementById("menu");
    menu.classList.add('h-[100%]')
  }

  const fechar = () => {
    const menu = document.getElementById("menu");
    menu.classList.remove('h-[100%]')
  }

  return (

    <main>
      <div className='fixed flex justify-end bg-blue-600 w-full'>
        <button onClick={abrir}>Menu</button>
      </div>
      <div id="menu" className='fixed bg-black/50 h-0 w-[100vw] text-white flex justify-center items-center text-[40px] tracking-[1px] overflow-hidden origin-top duration-500'>
        <button className="absolute top-[40px] right-[100px] bg-red-500" onClick={fechar}>fechar</button>
        <div>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </div>
      </div>
    </main>
  )
}

export default App
