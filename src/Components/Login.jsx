import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import '/src/Components/Login.css';



const Login = () => {
  return (
   <div className="container"> 
         <form>
            <img src="/src/assets/logo 2.png" alt="LoginSA/src/assets/logo 2.png" type="image/png"/>
            <h1>Seja bem vindo</h1>
            
            <div className='input1'>
            <input type="email" placeholder="E-mail" />
            <FaUser className="icon" />
            </div>
            
            <div className='input2'>
            <input type="password" placeholder="Senha" />
            <FaLock className="icon" />
            </div>

            <div className="recall-forget"> 
                <label>
                    <input type="checkbox" />
                    Lembrar de mim
                </label>
                
                <a href="#">Esqueceu a senha?</a>
            
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <Link to="/Cadastro">Cadastre-se</Link>
                </p>


            </div>

        </form>
   </div>
  )
}

export default Login;
