const Auth = () => {
    const auth = localStorage.getItem('Auth');
    if (auth == 'true') return true;
    return false;

};

export default Auth;