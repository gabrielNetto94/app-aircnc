import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){ //usa-se o history para fazer a navegação entre telas

    const [email, setEmail] = useState(''); //email retorna a ultima informação que foi digitada

    async function handleSubmit(event){
        event.preventDefault(); //após o submit a tela não será atualizada através deste método
        
        //var email = document.getElementById("email");
        //console.log(email.value);
    
        const response = await api.post('/sessions', { email }); //requisição com método POST para a api passando por parâmetro o email
    
        const { _id } = response.data;//pega o id do user armazenada no banco da respota do request
    
        localStorage.setItem('user', _id); //armazena no localstorage
    
        history.push('/dashboard'); //método para mandar o usuário para outra tela; passa a rota da aplicação
      }

    //cria um fragment <> </>, apenas para não cria outra tag no html para não perder a estilização que já foi feita
    return (
        <> 
            <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL </label>
                <input type="email" id="email" placeholder="Digite seu email" value={email} onChange={event => setEmail(event.target.value)} />
                <button type="submit" className="btn">Entrar</button>
            </form>
      </>
    )
}