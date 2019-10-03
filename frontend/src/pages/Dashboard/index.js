import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function Dashboard(){

    const [ spots, setSpots ] = useState([]);

    useEffect(() => {
        async function loadSpots(){

            const user_id = localStorage.getItem('user'); //pega o id do user que foi armazenado
            const response = await api.get('/dashboard',{ //consulta a api obtendo os spots que o usuário criou
                headers: { user_id: user_id}
            });
            
            setSpots(response.data); //atribui a response do request para o spots, que será percorrido para preencher os spots
        }

        loadSpots();
    }, []);//todas variável que estiver no array [] e sofrer alguam alteraçáo, a função será executada novamente, se ficar vazio a função será executada apenas uma vez

    return (
        <>
            <ul className="spot-list">
                {spots.map( spot =>(
                  
                  <li key={spot._id}>
                      <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}}></header>
                      <strong>{ spot.company }</strong>
                      <span>{ spot.price ?`R$${spot.price}/dia` : `GRÁTIS` }</span>
                  </li>  

                ))}
            </ul>
            
            <Link to="/new">
                Cadastrar novo Spot
            </Link>
        </>
    )
}