import React, { useState } from 'react'
import { FaEyeSlash, FaEye, FaGoogle, FaFacebookF } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


export const Login = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const alterarVisibilidadeSenha = () => {
    setMostrarSenha(!mostrarSenha);
  }

  return (
    <div className='min-h-screen bg-neutral-100 flex items-center justify-center'>
        <div className="max-w-md w-full bg-neutral-50 px-10 py-8 rounded-lg shadow-xl space-y-2">
            <div className='space-y-2'>
                <h2 className="text-3xl font-bold text-neutral-800">
                    Login
                </h2>
                <p className='text-sm text-neutral-500'>
                    Seja Bem Vindo de volta!
                </p>
            </div>

            <form action="" className="space-y-7">
                
                <div className="space-y-4">
                    <div className='space-y-1.5'>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-500">
                            Email
                        </label>
                        <input type="email" id='email' placeholder='ex: kuenda@teste.com' className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 " />
                    </div>
                    <div className='space-y-1.5'>
                        <label htmlFor="senha" className="block text-sm font-medium text-neutral-500">
                            Senha
                        </label>
                        <div className="relative">      
                        <input type={mostrarSenha? 'text': 'password'} id='senha' placeholder='ex: kuenda@teste.com' className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 " />

                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <button type='button' onClick={alterarVisibilidadeSenha} className='text-neutral-500'>
                                {mostrarSenha? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className="flex items-center gap-x-2">
                        <input type="checkbox" id="lembrar" className='form-checkbox h-4 w-4' />
                        <label htmlFor="lembrar" className='block text-sm text-neutral-500 font-normal'>
                            Lembrar
                        </label>
                    </div>
                    <a href={'/'} >
<p className='text-sm font-normal text-neutral-500 hover:text-red-500 ease-in duration-300'>Esqueceu a senha?</p>
                    </a>
                </div>

                <button className="w-full py-2 px-4 bg-red-600 text-neutral-50 rounded-md">
                    Login
                </button>

                <div className=" flex items-center justify-center">
                    <div className="w-full border-t border-neutral-200"></div>
                        
                            <div className='mx-2 text-neutral-500'>OR</div>
                            <div className='w-full border-t border-neutral-200'></div>
                        
                    
                </div>

                <div className='w-full flex items-center justify-between gap-10'>
                        <button className="w-full py-2 px-4 bg-blue-600/5 border-[1.65px] text-blue-600 border-red-600/20 hover:border-red-600/40 rounded-md flex items-center justify-center gap-x-2 ease-in-out duration-300">
                        <FaFacebookF /> Facebook
                        </button>
                        <button className="w-full py-2 px-4 bg-red-600/5 border-[1.65px] text-red-600 border-red-600/20 hover:border-red-600/40 rounded-md flex items-center justify-center gap-x-2 ease-in-out duration-300">
                        <FaGoogle /> Google
                        </button>
                    </div>
            </form>
        </div>
    </div>
  )
}

