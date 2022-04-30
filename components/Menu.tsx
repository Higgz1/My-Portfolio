import React from 'react'

function Menu() {
  return (
    <div className="border-r-2 border-gray-800 bg-black text-white">
        <h1 className="">
            Hi, I am <br /> Bryan Kahiga <br /><span></span>
        </h1>
    <hr className="border-t-[0.1px]"/>
    {/* {menu} */}
    <div className="flex flex-col align-middle">
        <a className=" align-middle justify-center" href=""> About Me</a>
        <a className=" justify-center" href="">My Work</a>
        <a className=" justify-center" href="">Contact</a>
        <a className=" justify-center" href="">Now!</a>
    </div>
    </div>
  )
}

export default Menu