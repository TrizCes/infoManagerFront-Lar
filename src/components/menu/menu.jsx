import './menu.css';
import { NavLink , Link } from 'react-router-dom';
import HandleLogout from '../../utils/Auth/Logout';

const Menu = () => {
    return (
        <div className='menu'>
            <div> <Link to='../home'> <img src='../src/assets/logo.svg' alt='Info Manager' /> </Link> </div>
            <nav>
                <NavLink to='../list' activeclassname='active' className='item'>Listar Clientes</NavLink>
                <NavLink to='../search' activeclassname='active' className='item'>Buscar Cliente</NavLink>
                <NavLink to='../add' activeclassname='active' className='item'>Adicionar Cliente</NavLink>
                <NavLink to='../settings' activeclassname='active' className='item'>Ferramentas</NavLink>
                <NavLink to='../' onClick={HandleLogout} className='item'>Logout</NavLink>
            </nav>
        </div>
    )
};

export default Menu;
