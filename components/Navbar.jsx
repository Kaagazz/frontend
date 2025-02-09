import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-[#D9D9D9] text-black p-4 h-33 flex justify-around items-center'>
      <div>
        <h1 className='font-bold cursor-pointer'>KAAGAZZ LOGO</h1>
      </div>
    <div className='flex justify-around gap-20'>
      <span className='cursor-pointer'>home</span>
      <span className='cursor-pointer'>sustainiblity</span>
      <span className='cursor-pointer'>shop</span>
    </div>
    </div>
  )
}

export default Navbar
