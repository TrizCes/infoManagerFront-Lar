import React, { useState, useEffect } from 'react';
import './list.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const statusMap = {
    0: 'Ativo',
    1: 'Desativado',
    2: 'Suspenso',
    3: 'Pendente'
};

const List = () => {
    const url = "http://localhost:40653";
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const clientList = async () => {
        try {
            const token = localStorage.getItem('token');
            const bearerToken = `Bearer ${token}`;
            const response = await axios.get(`${url}/api/people`, { headers: { Authorization: bearerToken } });
            setData(response.data);
        } catch (error) {
            setError('Erro ao obter lista de clientes');
            console.error('Erro de login:', error);
        }
    };

    useEffect(() => {
        clientList();
    }, []);

    return (
        <div className='listContent'>
            {error && <p>{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((client) => (
                        
                        <tr key={client.id}>
                            <Link id='line' to={`client/${client.id}`}>
                                <td>{client.id}</td>                            
                                <td>{client.name}</td>
                                <td>{client.cpf}</td>
                                <td>{client.birthday}</td>
                                <td>{statusMap[client.status]}</td>  
                            </Link>
                        </tr>
                        
                    ))}
                </tbody>
            </table>           
        </div>
    );
};

export default List;
