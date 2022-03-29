import React from 'react';

import { SiReactivex } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = () => {
    return (
        <section class="fixed w-screen bg-[rgba(62,42,109,0.95)] py-4 shadow-lg shadow-red-300/25">
            <div class="flex flex-row relative mx-36 items-center">
                <div class="flex items-center">
                    <SiReactivex size="50" class="text-red-200 shadow-2xl" />
                    <h1 class="px-5 text-3xl font-serif italic text-red-200">
                        Aras-lify
                    </h1>
                </div>

                <div class="absolute right-0 flex items-center">
                    <button class="text-xl flex items-center bg-[rgba(117,41,124,0.5)] hover:bg-[rgba(85,14,88,0.5)] text-white font-bold py-2 px-4 rounded-full shadow-lg">
                        <BsCart4 class="text-red-200 px-2" size="40" />
                        <p>5</p>
                    </button>

                    <p class="px-16 text-3xl text-neutral-50">
                        Welcome Aras
                    </p>

                    <button class="text-xl flex items-center bg-[rgba(17,5,19,0.5)] hover:bg-[rgba(78,40,67,0.5)] text-white font-bold py-2 px-2 shadow-lg">
                        <HiOutlineLogout class="text-red-200 shadow-2xl px-2" size="40" /> 
                        <p>Logout</p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;