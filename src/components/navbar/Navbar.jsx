import React from 'react'
import Links from '../links/Links'

const Navbar = () => {
  return (
    <div>
<nav className="h-8 flex justify-between mx-10 sm:mx-16 my-2 py-2 items-center">
  <h1 className="font-bold text-xl">
    LOGO
  </h1>

  <ul className="flex flex-between ">
  <Links/>
  </ul>
</nav>
    </div>
  )
}

export default Navbar
