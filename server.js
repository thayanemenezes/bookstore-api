const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Curso de NodeJS',
    '/livros': 'Listagem de livros',
    '/autores': 'Listagem de autores'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})