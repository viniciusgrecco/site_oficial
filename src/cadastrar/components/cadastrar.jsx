import "./cadastrar.css";
import { useState } from "react";
import { registerUserApi } from "../api/register-user-api";
import { useNavigate } from "react-router-dom";
import { getCEPInfosApi } from "../api/get-cep-infos-api";

function Register() {
    let [registerInfos, setRegisterInfos] = useState({
        name: "",
        email: "",
        password: ""
    });

    let [CEP, setCEP] = useState("");
    let [CEPInfos, setCEPInfos] = useState({});

    let [repeatPassword, setRepeatPassword] = useState("");
    let navigate = useNavigate();

    const getCEPInfos = async () => {
        if (!CEP) return;

        let {response, data} = await getCEPInfosApi(CEP);
        setCEPInfos(data);
    };

    const registerUser = async () => {
        for (let k in registerInfos) {
            if (!registerInfos[k]) {
                return;
            }
        }

        if (registerInfos.password !== repeatPassword) {
            return;
        }

        let {response, data} = await registerUserApi(registerInfos);

        if (response.ok) {
            navigate("/login");
        }
    };

    return (
        <div className="register-page">
            <div className="image-container">
                <img src="src/login/assets/imagemboa.jpg" alt="Register" />
            </div>
            <div className="register-main-container">
                <h2>Cadastro</h2>
                <input placeholder="Nome" onChange={(ev) => setRegisterInfos(prev => ({...prev, name: ev.target.value}))} />
                <input placeholder="Email" onChange={(ev) => setRegisterInfos(prev => ({...prev, email: ev.target.value}))} />
                <input placeholder="Senha" onChange={(ev) => setRegisterInfos(prev => ({...prev, password: ev.target.value}))} />
                <input placeholder="CEP" onBlur={getCEPInfos} onChange={(ev) => setCEP(ev.currentTarget.value)}/>
                <input value={CEPInfos.bairro} placeholder="Bairro" readOnly/>
                <input placeholder="Repetir senha" onChange={(ev) => setRepeatPassword(ev.target.value)} />
                <button onClick={registerUser}>Registrar</button>
            </div>
        </div>
    );
}

export default Register;
