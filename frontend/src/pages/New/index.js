import React, { useState, useMemo } from 'react'; //useState para pegar o valor das variáveis em tela, useMemo para gerar um preview da imagem 
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New({history}){

    const [thumbnail, setThumbnail] = useState( ); //inicia com nulo, pq é arquivo, n texto
    const [company, setCompany ] = useState('');//passa um parâmetro para inciar o método
    const [techs, setTechs ] = useState('');
    const [price, setPrice ] = useState('');

    const preview = useMemo(() => {//método para atualizar a imagem do input file toda vez que for alterada
        return thumbnail ? URL.createObjectURL(thumbnail) : null; //retorna a thumbnail se exister, se não retorna null
    
    },[thumbnail])
    
    async function handleSubmit(event){//método para criar um spot

        event.preventDefault();

        const data = new FormData(); //cria um array para enviar para o backend, pq o backend nessa rota não recebe JSON , e sim multpart por causa da imagem
        const user_id = localStorage.getItem('user');//pega o id do usuário para do localstorage e envia no header da requisição

        //adiciona para o array data as informações
        data.append('thumbnail' , thumbnail);
        data.append('company' , company);
        data.append('techs' , techs);
        data.append('price' , price);

        await api.post('./spots', data, {
            headers: {user_id}
        })

        history.push('/dashboard');//manda o usuário para a rota /dashboard, após criar o spot
    }

    return(
        
        <form onSubmit={handleSubmit}>
        
        <label id="thumbnail" style={{backgroundImage: `url(${preview})`}/*seta a imagem no label */} className={thumbnail ? 'has-thumbnail': ''}>
            <input type="file" onChange={event => setThumbnail(event.target.files[0]) /*files sempre retorna vetor, por isso passa a posição que deseja pegar */}></input>
            <img src={camera} alt="select img"></img>
        </label>
        
            <label htmlFor="Company">EMPRESA *</label>
            <input 
                id="company" 
                placeholder="Sua empresa incrível" 
                value={company} onChange={ event => setCompany(event.target.value) /*qualquer alteração na variável, seta um novo valor para company*/ }
            />

        <label htmlFor="Company">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
            <input 
                id="techs" 
                placeholder="Quais tecnlogias usam" 
                value={techs} onChange={ event => setTechs(event.target.value) /*qualquer alteração na variável, seta um novo valor para techs*/ }
            />

        <label htmlFor="Company">VALOR DA DIÁRIA <span>(em branco para GRATUITO)</span></label>
            <input 
                id="price" 
                placeholder="Valor cobrado por dia" 
                value={price} onChange={ event => setPrice(event.target.value) /*qualquer alteração na variável, seta um novo valor para price*/ }
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}