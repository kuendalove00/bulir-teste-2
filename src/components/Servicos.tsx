import React from 'react'
import contractImage from '../assets/imagens/contrato.jpg';

import Card from './Card'


export const Servicos = () => {
  return (
    <div className='servicos bg-gray-100'>
        <h1>Serviços Disponíveis</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestias.</p>
        <body className='h-screen  flex items-center justify-center gap-10'>
        <Card
            serviceImage={contractImage}
            prestador={'Kuenda Mayeye'}
            titulo={'Limpeza'}
            preco={2000}
        />

        <Card
            serviceImage={contractImage}
            prestador={'Kuenda Mayeye'}
            titulo={'Limpeza'}
            preco={2000}
        />

        <Card
            serviceImage={contractImage}
            prestador={'Kuenda Mayeye'}
            titulo={'Limpeza'}
            preco={2000}
        />
        </body>
        

    </div>
  )
}
