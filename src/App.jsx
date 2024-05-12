import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/login/login.jsx';
import Home from './pages/home/home.jsx';
import Wellcome from './pages/wellcome/wellcome.jsx';
import Footer from './components/footer/footer.jsx';
import Menu from './components/menu/menu';
import Auth from './utils/Auth/Auth.jsx';
import List from './pages/list/list';
import Client from './pages/client/client';

function App() {
    function Layout({ children }) {
        if (!Auth()) return <Navigate to="/" replace />;
        return (
            <>
                <div className='navMenu'>
                    <Menu />
                </div>
                <div className='page'>
                    {children}
                </div>
            </>
        );
    };

    return (
            <Router>
                <div className="app">
                    <Routes>
                        <Route path='/' element={<Wellcome />} />
                        <Route path="login" element={<Login />} />
                    <Route path='home' element={<Layout><Home /></Layout>} />
                    <Route path='list' element={<Layout><List /></Layout>} />
                    <Route path='list/client/:id' element={<Layout><Client /></Layout>} /> 
                    </Routes>
                </div>
                <Footer />
            </Router >
    );
};

export default App;
