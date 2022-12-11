import React from 'react'

const NavbarItems = () => {
  return (
    <div className={"flex flex-row justify-end gap-x-5 px-5"}>
        <div className={"text-white font-bold py-2"}>Home</div>
        <div className={"text-white font-bold py-2"}>Browse Games</div>
        <div className={"text-white font-bold py-2"}>About</div>
    </div>
  )
}

export default NavbarItems;