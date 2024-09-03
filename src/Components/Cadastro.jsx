import React from 'react';

import { BrowserRouter as Link } from 'react-router-dom';
import '/src/Components/Cadastro.css';

const Cadastro = () => {
  return (
   <div className="container"> 
         <form>
            <h1>Acesse o sistema</h1>
            
            <div className='formulario'>
            <input type="text" placeholder='Nome completo' />
            <input type="CPF" placeholder="CPF/CNPJ" />
            <input type="phone" placeholder="telefone" />
            <input type="phone" placeholder="telefone de recuperação" />
            <input type="e-mail" placeholder="e-mail" />
            <input type="e-mail" placeholder="e-mail de recuperação" />
            <input type="date" placeholder="Nascimento" />
            <input type="password" placeholder="Senha" />
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
                <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                </p>
            </div>

        </form>
   </div>
  )
}

export default Cadastro;
