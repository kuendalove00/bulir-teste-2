import React, { Component } from 'react'

interface CardProps {
    serviceImage: string;
    prestador: string;
    titulo: string;
    preco: number;
}

class Card extends Component<CardProps> {
    render(){
        return (
    
            <div className='card'>
                <div className='relative w-full h-full'>
            <img className='w-full h-full object-cover' src={this.props.serviceImage} alt="serviço 1" />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>
          </div>
    
                <div className='p-5 flex flex-col gap-3'>
    
                    <div className='flex items-center gap-2'>
                        <span className='badge'>{this.props.prestador}</span>
                        
                    </div>
    
                    <h2 className='product-title'>
                    {this.props.titulo}
                </h2>
    
                <div>
                    
                    <div className='flex items-center gap-2 '>
                        <span className='text-md  opacity-50'>
                        {this.props.preco} Kz
                        </span>
                        <span className='discount-percent'>
                            disponível
                        </span>
                    </div>
                </div>
    
                <div className='mt-5 flex gap-2'>
                    <button className='button-primary'>
                        Contratar
                    </button>
                    <button className='button-icon'>
                        Saber mais
                    </button>
                </div>
                </div>
    
                
            </div>
        
      )
    }
}

export default Card;
