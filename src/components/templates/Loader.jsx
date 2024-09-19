import React from 'react' ;
import loader from '/Loader.gif' ;
const Loader = () => {
  return (
    <div className='w-full h-screen '>
        <img src={loader} alt="" className='w-[50%]  mx-auto object-cover' />
    </div>
  )
}

export default Loader