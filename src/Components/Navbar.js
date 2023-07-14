import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='bg-slate-200 fixed top-0 z-10 w-full'>
            <ul className='list-none'>
                <li><img src="/images/BhagvadGita.png" className=' w-28' alt="logo" /></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar