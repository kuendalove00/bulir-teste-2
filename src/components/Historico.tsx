import React from 'react'
import contractImage from '../assets/imagens/contrato.jpg';

import HorizontalCard from './HorizontalCard';


export const Historico = () => {
  return (
    <div className='historico bg-gray-100'>
        <h1>Histórico de Contratos</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestias.</p>
        <div className='flex flex-col items-center justify-center gap-5'>
            <HorizontalCard 
                serviceImage={contractImage}
                titulo={'Limpeza'}
                data={'30-07-2024'}
                preco={2000}
                prestador={'Kuenda Mayeye'}
            />
            <HorizontalCard 
                serviceImage={contractImage}
                titulo={'Limpeza'}
                data={'30-07-2024'}
                preco={2000}
                prestador={'Kuenda Mayeye'}
            />
            <HorizontalCard 
                serviceImage={contractImage}
                titulo={'Limpeza'}
                data={'30-07-2024'}
                preco={2000}
                prestador={'Kuenda Mayeye'}
            />
        </div>
        

    </div>
  )
}
