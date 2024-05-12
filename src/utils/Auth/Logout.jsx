const HandleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('Auth');
};

export default HandleLogout;