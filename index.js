import express from 'express';

const host = '0.0.0.0';
const porta = 3000;

const app = express();

function retornaPaginaInicial(requisicao, resposta){
    resposta.write('<!DOCTYPE html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Pagina Inicial</tilte>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Página Inicial</h1>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};

app.get("/", retornaPaginaInicial);

app.listen(porta, host, ()  => {
    console.log("Servidor está executando em http: //" + host + ":" + porta);
});