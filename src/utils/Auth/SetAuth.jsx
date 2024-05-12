const SetAuth = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('Auth', true);
    return
};

export default SetAuth;