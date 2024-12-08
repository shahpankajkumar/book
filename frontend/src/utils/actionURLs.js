const USER_REGISTRATION = `${(process.env.REACT_APP_API_URL || 'https://book-server-ruby.vercel.app')}/user/register`;
const USER_LOGIN = `${(process.env.REACT_APP_API_URL || 'https://book-server-ruby.vercel.app')}/user/login`;
const GET_BOOK = `${(process.env.REACT_APP_API_URL || 'https://book-server-ruby.vercel.app')}/books/get`;
const ADD_BOOK = `${(process.env.REACT_APP_API_URL || 'https://book-server-ruby.vercel.app')}/books/add`;
const DELETE_BOOK = `${(process.env.REACT_APP_API_URL || 'https://book-server-ruby.vercel.app')}/books/delete`;

module.exports = {
    USER_REGISTRATION, USER_LOGIN, GET_BOOK, ADD_BOOK, DELETE_BOOK
}