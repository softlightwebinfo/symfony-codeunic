// @ts-ignore
const routes = require('next-routes')

const route = routes();
// Name   Page      Pattern
// @ts-ignore
module.exports = route
    .add({name: 'index', pattern: '/', page: 'index'})
    .add({name: 'login', pattern: '/login', page: 'login'})
    .add({name: 'register', pattern: '/register', page: 'register'})
    .add({name: 'contact', pattern: '/contact', page: 'contact'})
    .add({name: 'blog', pattern: '/blog', page: 'blog'})