import React from 'react';

import { SiReactivex } from "react-icons/si";

const Navbar = () => {
    return (
        <section class="fixed w-screen">
            <div class="flex flex-row relative mx-36 items-center">
                <SiReactivex size="50" />
                <div>Navbar</div>
                <div class="absolute right-0">aras</div>
            </div>
        </section>
    );
};

export default Navbar;