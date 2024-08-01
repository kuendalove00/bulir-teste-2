import React from 'react'
import headphoneImage from '../assets/imagens/headphone.jpg';
import starImage from '../assets/imagens/star.svg';
import starHalfFillImage from '../assets/imagens/star-half-fill.svg';
import starNoFillImage from '../assets/imagens/star-no-fill.svg';
import loveImage from '../assets/imagens/love.svg';
import eyeImage from '../assets/imagens/eye.svg';


export const Card = () => {
  return (
    
        <div className='card'>
            <img className='w-full h-full object-cover' src={headphoneImage} alt="serviço 1" />

            <div className='p-5 flex flex-col gap-3'>

                <div className='flex items-center gap-2'>
                    <span className='badge'>Stock Ready</span>
                    <span className='badge'>Official store</span>
                </div>

                <h2 className='product-title' title='Best headphone ever'>
                Best Headphone
            </h2>

            <div>
                <span className='text-xl font-bold'>
                    Rp 400.000
                </span>
                <div className='flex items-center gap-2 mt-1'>
                    <span className='text-sm line-through opacity-50'>
                        Rp 500.000
                    </span>
                    <span className='discount-percent'>
                        save 20%
                    </span>
                </div>
            </div>

            <span className='flex items-center mt-1'>
                <img src={starImage} />
                <img src={starImage} />
                <img src={starImage} />
                <img src={starHalfFillImage} />
                <img src={starNoFillImage} />
                <span className='text-xs ml-2 text-gray-500'>
                    20k reviews
                </span>
            </span>

            <div className='mt-5 flex gap-2'>
                <button className='button-primary'>
                    Contratar
                </button>
                <button className='button-icon'>
                    <img className='opacity-50' src={loveImage} alt="add to wishlist" />
                </button>
                <button className='button-icon'>
                    <img className='opacity-50' src={eyeImage} alt="add to wishlist" />
                </button>
            </div>
            </div>

            
        </div>
    
  )
}
