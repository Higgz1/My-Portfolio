import React from "react";

function Menu() {
  return (
    <div className="border-r-2 border-gray-800 bg-dark-100 text-white h-screen w-3/6">
      {/* {Intro} */}
      <div className="h-3/6 px-10">
        <h1 className="">
          Hi, I am <br /> Bryan Kahiga <br />
          <span> Web and Mobile Developer</span>
        </h1>
      </div>
      <hr className="border-t-[0.1px] border-gray-700" />

      {/* {Menu} */}
      <div className="flex flex-col pt-16 space-y-16">
        <p className="cursor-pointer flex justify-center">About Me</p>
        <p className="cursor-pointer flex justify-center">My Work</p>
        <p className="cursor-pointer flex justify-center">Get in touch</p>
        <p className="cursor-pointer flex justify-center">Now!</p>
      </div>
    </div>
  );
}

export default Menu;
