import React from 'react';
import { FaUnlockAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex h-screen">
      <form className="bg-[#c6cde0] w-72 md:w-96 m-auto h-82 text-center py-10 px-10 rounded-lg shadow-2xl border-2 border-blue-200">
        <div className="pb-5">
          <h1 className="text-2xl pb-5">Login</h1>
          <FaUnlockAlt size="30" className="mx-auto pb-2" />
          <p className="text-lg">This is a practice project.</p>
          <p className="text-lg">Enter dummy email and</p>
          <p className="text-lg">dummy password...</p>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="grid">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control
              w-11/12
              mx-auto
              px-5
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border-2 border-solid border-blue-300
              transition
              ease-in-out
              m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-full" required />
          </div>

          <div className="grid">
            <label htmlFor="psw">Password</label>
            <input type="password" id="psw"
              className="form-control
              mx-auto
              w-11/12
              px-5
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border-2 border-solid border-blue-300
              transition
              ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-full" required />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/5 mx-auto rounded-full">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;