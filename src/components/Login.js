import React from 'react';

const Login = () => {
  return (
    <form class="bg-sky-200 m-auto w-96 h-36 text-center py-10">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>

      <div>
        <label htmlFor="psw">Password</label>
        <input type="password" id="psw" />
      </div>

      <button>Login</button>
    </form>
  )
}

export default Login;