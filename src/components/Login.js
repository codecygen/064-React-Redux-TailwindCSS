import React from 'react';
import { FaUnlockAlt } from "react-icons/fa";

const Login = () => {
  return (
    <form class="bg-sky-200 m-auto w-auto h-82 text-center py-10 px-10 rounded-lg shadow-2xl">
      <div class="pb-5">
        <h1 class="text-2xl pb-5">Login</h1>
        <FaUnlockAlt size="30" class="mx-auto pb-2" />
        <p class="text-lg">This is a practice project.</p>
        <p class="text-lg">Enter dummy email and</p>
        <p class="text-lg">dummy password...</p>
      </div>

      <div class="flex flex-col space-y-6">
        <div class="grid">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" class="form-control
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border-2 border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
        </div>

        <div class="grid">
          <label htmlFor="psw">Password</label>
          <input type="password" id="psw"
            class="form-control
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border-2 border-solid border-gray-300
              rounded
              transition
              ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-3/5 mx-auto">Login</button>
      </div>
    </form>
  )
}

export default Login;