import React, { useState } from 'react'
import { FaEyeSlash, FaEye, FaGoogle, FaFacebookF } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { nomeRotas } from '../../routes/nomeRotas';
import { useRegisto } from './state';


export const Registo = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const alterarVisibilidadeSenha = () => {
    setMostrarSenha(!mostrarSenha);
  }

  const { state } = useLocation();
  const { isUpdate = false } = state || {};


  const {
    formData,
    handleSave,
    setFormValue,
    navigateGoBack,
  } = useRegisto({ navigationState: state });


  return (
    <div className='min-h-screen bg-neutral-100 flex items-center justify-center'>
        <div className="max-w-md w-full bg-neutral-50 px-10 py-8 rounded-lg shadow-xl space-y-2">
            <div className='space-y-2 mb-5'>
                <h2 className="text-3xl font-bold text-neutral-800">
                    Registo
                </h2>
                <p className='text-sm text-neutral-500'>
                    Seja Bem Vindo de volta!
                </p>
            </div>

            <form action="" className="space-y-7">
                
                <div className="space-y-4 ">
                    <div className='space-y-1.5'>
                        <label htmlFor="nome" className="block text-sm font-medium text-neutral-500">
                            Nome Completo
                        </label>
                        <input 
                        value={formData?.nome_completo}
                        onChange={(e) => setFormValue({ nome_completo: e?.target?.value })}
                        name="nome"
                         type="text" id='nome' placeholder='' className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 " />
                    </div>
                    <div className='space-y-1.5'>
                        <label htmlFor="nif" className="block text-sm font-medium text-neutral-500">
                            Nif
                        </label>
                        <input
                         value={formData?.nif}
                         onChange={(e) => setFormValue({ nif: e?.target?.value })}
                         name="nome"
                        type="text" id='nif' placeholder='' className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 " />
                    </div>
                    <div className='space-y-1.5'>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-500">
                            Email
                        </label>
                        <input 
                         value={formData?.email}
                         onChange={(e) => setFormValue({ email: e?.target?.value })}
                         name="nome"
                        type="email" id='email' placeholder='ex: kuenda@teste.com' className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 " />
                    </div>
                    <div className='space-y-1.5'>
                        <label htmlFor="senha" className="block text-sm font-medium text-neutral-500">
                            Senha
                        </label>
                        <div className="relative">      
                        <input
                         value={formData?.senha}
                         onChange={(e) => setFormValue({ senha: e?.target?.value })}
                         name="nome"
                        type={mostrarSenha? 'text': 'password'} id='senha' placeholder='' className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 " />

                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <button type='button' onClick={alterarVisibilidadeSenha} className='text-neutral-500'>
                                {mostrarSenha? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        </div>
                    </div>

                    <div className='space-y-1.5'>
                        <label htmlFor="confirmar_senha" className="block text-sm font-medium text-neutral-500">
                            Confirmar a senha
                        </label>
                        <div className="relative">      
                        <input 
                         value={formData?.confirmar_senha}
                         onChange={(e) => setFormValue({ confirmar_senha: e?.target?.value })}
                         name="nome"
                        type={mostrarSenha? 'text': 'password'} id='confirmar_senha' placeholder='' className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 " />

                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <button type='button' onClick={alterarVisibilidadeSenha} className='text-neutral-500'>
                                {mostrarSenha? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        </div>
                    </div>

                    <div className='space-y-1.5'>
                        <label htmlFor="tipo" className="block text-sm font-medium text-neutral-500">
                            Tipo de Conta
                        </label>
                        <select  
                        value={formData?.tipo}
                        onChange={(e) => setFormValue({ tipo: e?.target?.value })}
                        name="nome"
                          id="tipo" className="w-full block bg-neutral-50 text-neutral-900 rounded-md text-base h-11 pl-4 outline-none ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 ">
                            <option>Selecione um tipo de conta</option>
                            <option value="PRESTADOR">Prestador</option>
                            <option value="CLIENTE">Cliente</option>
                        </select>
                        
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                   
                   
<p className='text-sm font-normal text-neutral-500'>Já possui uma conta?  <a className=' hover:text-red-500 ease-in duration-300' href={nomeRotas.login} >Login</a></p>
                </div>

                <button type='button' onClick={handleSave} className="w-full py-2 px-4 bg-red-600 text-neutral-50 rounded-md">
                    Submeter
                </button>

            </form>
        </div>
    </div>
  )
}

