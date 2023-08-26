import React from 'react'

const Contact = () => {
  return (
    <div className='sectionC'>
      <h1 className='text-primary lg:text-[52px] text-[30px] text-center mb-8 '>Contact Us</h1>
      <h2 className='lg:text-2xl text-[16px] text-center text-primary font-bold mb-8'>Any question about our products or technologies?
<br/>Just text us!</h2>
      <div className="form">
        <form action="">
          <div className='flex flex-col mb-2'>
            <label htmlFor="email" className='text-primary font-bold'>Email</label>
            <input type="text" name='email' className='w-full border-primary p-4' style={{borderBottomLeftRadius: '26px' , borderBottomRightRadius: "26px", borderTopLeftRadius:"26px", borderTopRightRadius: "26px", border: "1px solid #5452fe"}}/>
            </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor="name" className='text-primary font-bold'>Name</label>
            <input type="text" name='name' className='w-full border-primary p-4' style={{borderBottomLeftRadius: '26px' , borderBottomRightRadius: "26px", borderTopLeftRadius:"26px", borderTopRightRadius: "26px", border: "1px solid #5452fe"}}/>
            </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor="phone" className='text-primary font-bold'>Phone</label>
            <input type="text" name='phone' className='w-full border-primary p-4' style={{borderBottomLeftRadius: '26px' , borderBottomRightRadius: "26px", borderTopLeftRadius:"26px", borderTopRightRadius: "26px", border: "1px solid #5452fe"}}/>
            </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor="question" className='text-primary font-bold' >Question</label>
            <textarea cols={10} className='w-full border-primary p-4' style={{borderBottomLeftRadius: '26px' , borderBottomRightRadius: "26px", borderTopLeftRadius:"26px", borderTopRightRadius: "26px", border: "1px solid #5452fe"}}/>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact