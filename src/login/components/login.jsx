import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let navigate = useNavigate()

  const userLogin = async () => {
      if (!email || !password) return

      let {data, response} = await userLoginApi(email, password)

      if (response.ok) {
          if (data.is_employee) {
              navigate("/funcionario")
          } else {
              navigate("/cliente")
          }
      }
  }

  return (
      <div className="login-main-container">
          <input type="text" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)}/>
          <input type="text" placeholder="Senha" onChange={(ev) => setPassword(ev.target.value)}/>

          <button onClick={() => userLogin()}>Entrar</button>
      </div>
  )
}

export default Login;
