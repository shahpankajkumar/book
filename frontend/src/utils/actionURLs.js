const API = 'https://book-server-ruby.vercel.app';
// const API = 'process.env.REACT_APP_API_URL';

const USER_REGISTRATION = `${API}/user/register`;
const USER_LOGIN = `${API}/user/login`;
const GET_BOOK = `${API}/books/get`;
const ADD_BOOK = `${API}/books/add`;
const DELETE_BOOK = `${API}/books/delete`;

module.exports = {
    USER_REGISTRATION, USER_LOGIN, GET_BOOK, ADD_BOOK, DELETE_BOOK
}