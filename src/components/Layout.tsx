import React from 'react'
import { FaGripLines } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    /*const Menu = (e)  => {
        let list = document.querySelector('ul');

        e.name == 'menu' ? (e.name = 'close', list?.classList.add('top-[-80px]'), list?.classList.add('opacity-100')) : (e.name = "menu", lis)
    }*/

  return (
    <div>
         <nav className='py-5 bg-white sticky top-0 border-b border-gray-100'>
        <div className='container md:px-12 md:flex md:items-center md:justify-between'>
            <div className="flex items-center justify-between">
                <a href="#" className='flex items-center'>
                    <img src="./img/logo.svg" alt="logo" className='h-10 mr-3 '/>
                    <span className='text-2xl text-gray-900 font-sans font-bold'>Prestar</span>
                </a>
                <span className='block mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden'>
                <svg name='menu' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                </span>
            </div>
            <ul className='p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 py-4 opacity-0 top-[-400px] transition-all ease-in duration-500 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto md:opacity-100'>
                <li className='md:my-0'>
                    <a href="#inicio" className='font-medium duration-500 text-gry900 hover:text-indigo-600'>Inicio</a>
                </li>
                <li className='my-6 md:my-0'>
                    <a href="#sobre" className='font-medium duration-500 text-gry900 hover:text-indigo-600'>Serviços</a>
                </li>
                <li className='my-6 md:my-0'>
                    <a href="#" className='font-medium duration-500 text-gry900 hover:text-indigo-600'>Historico</a>
                </li>
                <li className='my-6 md:my-0'>
                    <a href="#" className='font-medium duration-500 text-gry900 hover:text-indigo-600'>Perfil</a>
                </li>
                <a href="#">
                    <button type='button' className='w-full text-white bg-indigo-600 font-medium rounded-lg text-md px-3.5 py-3 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out'>Começar</button>
                </a>
                

            </ul>
        </div>
    </nav>

    <Outlet />
    </div>
   
  )
}

export default Layout