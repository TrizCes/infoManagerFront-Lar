import { Link } from 'react-router-dom';
import './wellcome.css';

const Wellcome = () => {

    return (
        <div className='content'>
            <div className='wellcome'>
                <div className='title'>
                    <h1>Bem vindo(a) ao </h1>
                    <img className='logo' src='../src/assets/logo.svg' alt='Info Manager' />
                </div>
                <Link to='/login' ><button className='button' type="button" >Entrar</button></Link>
            </div>
            <div className='animated-content'>
                <img className='animated' src='../src/assets/team-animate.svg' />
                <a className='credit' href="https://storyset.com/people">People illustrations by Storyset</a>
            </div>
        </div>
    )
}

export default Wellcome;