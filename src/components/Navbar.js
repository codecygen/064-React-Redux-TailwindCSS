import React from 'react';

import { SiReactivex } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
    return (
        <section class="fixed w-screen bg-[#5e499033] py-4 shadow-2xl border-b border-pink-200">
            <div class="flex flex-row relative mx-36 items-center">
                <SiReactivex size="50" class="text-red-200 shadow-2xl" />
                <div class="absolute right-0 flex items-center">
                    <p class="px-32 text-2xl">Welcome Aras</p>
                    <button class="text-xl flex items-center"><BsCart4 class="px-2" size="40" />5</button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;