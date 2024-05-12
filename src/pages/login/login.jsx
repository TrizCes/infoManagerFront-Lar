import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; 
import { Link, Navigate } from 'react-router-dom';
import SetAuth from '../../utils/Auth/SetAuth';

const Login = () => {
    const url = "http://localhost:40653";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${url}/login`, { email, password });
            const token = response.data.token;
            SetAuth(token);
            console.log('Login successful:', response.data);

            window.location.href = '/home';
        } catch (error) {
            setError('Email ou senha incorretos');
            console.error('Erro de login:', error.valueOf());
        }
    };

    return (
        <div className="loginPage">
            <div className="image-container">
                <img src="../src/assets/login.svg" alt="Ilustração sobre comunicação: " />
            </div>
            <div className="formLogin">
                <div className="logo-container">
                    <img id="logo" src="../src/assets/logo.svg" alt="Ilustração sobre comunicação: " />
                </div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="text" value={email} onChange={handleEmailChange} />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button className='button' type="submit">Entrar</button>
                </form>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
};

export default Login;