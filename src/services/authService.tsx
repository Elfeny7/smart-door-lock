import Cookies from 'js-cookie';

export default function getTokenService() {
    const token = Cookies.get('token');
    return token;
}
