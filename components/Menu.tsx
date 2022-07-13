import React from 'react';
import Image from 'next/image';
import profilePic from '../public/Assets/images/DP3.jpg';

function Menu() {
  return (
    <div className="border-r-2 border-gray-800 bg-slate-100 text-slate-800 h-screen md:w-1/5">
      <div className="mt-20 ml-14 mb-4 md:flex flex-start flex-nowrap">
        <Image
          className="rounded-full "
          src={profilePic}
          alt=""
          width={62}
          height={62}
          // placeholder="blur"
        />
        <h1 className="mx-auto my-auto font-normal text-left text-lg md:text-4xl ml-4 text-slate-700">
          Bryan Kahiga
        </h1>
      </div>

      <div className="flex flex-col pt-16 space-y-12">
        <p className="cursor-pointer flex justify-start ml-20 text-3xl">
          Hello
        </p>

        <p className="cursor-pointer flex justify-start ml-20 text-3xl">Bio</p>

        <p className="cursor-pointer flex justify-start ml-20 text-3xl">
          Last Project
        </p>
        <p className="cursor-pointer flex justify-start ml-20 text-3xl">
          Clients
        </p>
        <p className="cursor-pointer flex justify-start ml-20 text-3xl">
          My Work
        </p>

        <p className="cursor-pointer flex justify-start ml-20 text-3xl">Now!</p>
      </div>
    </div>
  );
}

export default Menu;
