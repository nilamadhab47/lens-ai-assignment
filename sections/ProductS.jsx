import Product from '@/utlis/Product'
import React from 'react'

const ProductS = () => {
  return (
    <div className='section' id='product'>
        <h2 className='text-primary lg:text-[52px] text-[30px]'>Products</h2>
        <div className="product-list mt-8">
            <ul className='flex flex-col md:flex-row'>
                {Product.map((list, index)=> (
                    <li key={index} className='flex flex-col justify-center items-center text-primaryT text-center'>
                        <img src={list.image} alt="image" className='w-[100px] h-[100px]' />
                        <span className='text-primaryT font-bold mt-8 text-xs lg:text-[16px]' style={{letterSpacing: "1px"}} dangerouslySetInnerHTML={{ __html: list.header }}/>
                        <h4 className='lg:text-[40px] text-xl' style={{textDecoration: "underline"}}>{list.heading}</h4>
                        <p className='pr-[4rem] pl-[4rem]'>{list.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ProductS