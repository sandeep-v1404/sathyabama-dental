import cookie from 'react-cookies';

export const getConfig = () => {
    const headers = {
        'Content-Type': 'application/json',
    }
    // eslint-disable-next-line no-unused-expressions
    cookie.load("token") ? headers['Authorization'] = 'Bearer ' + cookie.load("token") : null;
    return { headers }
}



