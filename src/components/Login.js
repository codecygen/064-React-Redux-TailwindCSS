import React from 'react';

const Login = () => {
  return (
    <form class="bg-sky-200 m-auto w-96 h-82 text-center py-10 px-10 rounded-lg shadow-2xl">
      <div class="flex flex-col space-y-3">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" class="form-control
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
        </div>

        <div>
          <label htmlFor="psw">Password</label>
          <input type="password" id="psw" 
            class="form-control
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
      </div>
    </form>
  )
}

export default Login;