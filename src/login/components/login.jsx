import { useState } from "react";
import "./login.css";
import { userLoginApi } from "../api/user-login-api";
import { useNavigate } from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    const userLogin = async () => {
        if (!email || !password) return;

        let {data, response} = await userLoginApi(email, password);

        if (response.ok) {
            console.log(password);
            if (password === "junior") {
                navigate("/funcionarios");
            } else {
                navigate("/produtos");
            }
        }
    };

    const handleRegister = () => {
        navigate("/cadastrar");
    };

    return (
        <div className="login-page">
            <div className="image-container">
                <img src="src/login/assets/imagemboa.jpg" alt="Login" />
            </div>
            <div className="login-main-container">
                <h2>Login</h2>
                <input type="text" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)}/>
                <input type="text" placeholder="Senha" onChange={(ev) => setPassword(ev.target.value)}/>
                <p className="register-text" onClick={handleRegister}>Cadastre-se</p>
                <button onClick={() => userLogin()}>Entrar</button>
            </div>
        </div>
    );
}

export default Login;
