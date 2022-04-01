import React from 'react';

import { SiReactivex } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = props => {
    return (
        <section className="fixed w-screen bg-[rgba(62,42,109,0.95)] py-4 shadow-lg shadow-red-300/25">
            <div className="flex flex-row relative mx-36 items-center">
                <div className="flex items-center">
                    <SiReactivex size="50" className="text-red-200 shadow-2xl" />
                    <h1 className="px-5 text-3xl font-serif italic text-red-200">
                        Aras-lify
                    </h1>
                </div>

                <div className="absolute right-0 flex items-center">
                    <button className="text-xl flex items-center bg-[rgba(117,41,124,0.5)] hover:bg-[rgba(85,14,88,0.5)] text-white font-bold py-2 px-4 rounded-full shadow-lg"
                        onClick={props.clickCartHandler}
                    >
                        <BsCart4 className="text-red-200 px-2" size="40" />
                        <p>5</p>
                    </button>

                    <p className="px-16 text-3xl text-neutral-50">
                        Welcome Aras
                    </p>

                    <button className="text-xl flex items-center bg-[rgba(17,5,19,0.5)] hover:bg-[rgba(78,40,67,0.5)] text-white font-bold py-2 px-2 shadow-lg">
                        <HiOutlineLogout className="text-red-200 shadow-2xl px-2" size="40" /> 
                        <p>Logout</p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;