import React from 'react';

const Login = () => {
  return (
    <form class="bg-sky-200 m-auto flex h-10">
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