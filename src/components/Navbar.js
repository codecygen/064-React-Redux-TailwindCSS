import React, { useState, useEffect } from 'react';

import { SiReactivex } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Navbar = props => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    
    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const interim = setInterval(() => {
            setWindowWidth(window.innerWidth);
        }, 100);

        return () => clearInterval(interim);
    }, [windowWidth]);

    return (
        <section className="fixed right-0 left-0 w-screen bg-[rgba(62,42,109,0.95)] py-6 shadow-lg shadow-red-300/25">
            <div className="flex flex-row relative mx-5 lg:mx-36 items-center">
                <div className="flex items-center">
                    <SiReactivex size={windowWidth >= 540 ? '50' : '30'} className="text-red-200 shadow-2xl" />

                    {windowWidth >= 540 &&
                        <h1 className="px-5 text-lg lg:text-3xl font-serif italic text-red-200">
                            ArasShop
                        </h1>
                    }
                </div>

                {isAuthenticated && <div className="absolute right-2 flex items-center">
                    <button className="text-sm lg:text-xl px-2 lg:px-4 flex items-center bg-[rgba(117,41,124,0.5)] hover:bg-[rgba(85,14,88,0.5)] text-white font-bold py-2 rounded-full shadow-lg"
                        onClick={props.clickCartHandler}
                    >
                        <BsCart4 className="text-red-200 px-2" size="40" />
                        <p>5</p>
                    </button>

                    <p className="px-5 lg:px-16 text-lg lg:text-2xl text-neutral-50 text-center">
                        Welcome <br /> Aras
                    </p>

                    <button className="text-sm lg:text-xl flex items-center bg-[rgba(17,5,19,0.5)] hover:bg-[rgba(78,40,67,0.5)] text-white font-bold py-2 px-2 shadow-lg">
                        <HiOutlineLogout className="text-red-200 shadow-2xl px-2" size="40" />
                        <p>Logout</p>
                    </button>
                </div>}
            </div>
        </section>
    );
};

export default Navbar;