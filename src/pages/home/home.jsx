import './home.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Link to="/login" />;
    }

    return (
        <div className='home'>
            <img className='imgHome' src='../src/assets/support.svg' alt="ilustration"/>
            <a className='credit' href="https://storyset.com/online">Online illustrations by Storyset</a>
        </div>
    )
};
export default Home