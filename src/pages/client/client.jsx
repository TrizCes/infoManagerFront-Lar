import './client.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const typeMap = {
    'Mobile' : 'Movel',
    'Residential' : 'Residencial',
    'Commercial' : 'Comercial',
    'EmergencyContact' : 'Contato de emergencia'
};

const statusMap = {
    0: 'Ativo',
    1: 'Desativado',
    2: 'Suspenso',
    3: 'Pendente'
};

const Client = () => {
    const url = "http://localhost:40653";
    const token = localStorage.getItem('token');
    const bearerToken = `Bearer ${token}`;
    const { id } = useParams();
    const [clientData, setClientData] = useState(null);
    const [phoneData, setPhoneData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const response = await axios.get(`${url}/api/people/${id}`, { headers: { Authorization: bearerToken } });
                setClientData(response.data);
            } catch (error) {
                setError('Erro ao obter dados do cliente');
                console.error('Erro:', error);
            }
        };

        const fetchPhoneData = async () => {
            try {
                const response = await axios.get(`${url}/api/phone/person/${id}`, { headers: { Authorization: bearerToken } });
                setPhoneData(response.data);
            } catch (error) {
                setError('Erro ao obter lista de telefones');
                console.error('Erro de login:', error);
            }
        };

        fetchClientData();
        fetchPhoneData();

        return () => {
            setClientData(null);
            setPhoneData([]);
            setError('');
        };
    }, [id]);

    return (
        <div className="client">
            {error && <p>{error}</p>}
            {clientData ? (
                <div className='card'>
                    <h2>Detalhes do Cliente</h2>
                    <p>ID: {clientData.id}</p>
                    <p>Nome: {clientData.name}</p>
                    <p>CPF: {clientData.cpf}</p>
                    <p>Data de Nascimento: {clientData.birthday}</p>
                    <p>Status: {statusMap[clientData.status]}</p> 
                    <p>Telefones:
                        {phoneData.length > 0 ? (
                            <ul>
                                {phoneData.map((phone, index) => (
                                    <li key={index}>{phone.number} - {typeMap[phone.type]}</li>
                                ))}
                            </ul>
                        ) : (
                            "Nenhum telefone cadastrado"
                        )}
                    </p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default Client;
