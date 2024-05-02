import express from 'express';

const host = '0.0.0.0';
const porta = 3000;

const app = express();

function retornaPaginaInicial(requisicao, resposta){
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Pagina Inicial</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Página Inicial</h1>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};

function enviarDinheiro(requisicao, resposta){
    let valorDesejado = requisicao.query.valor;
    if(!valorDesejado){
        valorDesejado = 0;
    }

    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Oferta de dinheiro</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    if(valorDesejado > 0)
    {
        resposta.write('<h1>Toma aqui seus R$ ' + valorDesejado + '</h1>');
    }
    else
    {
        resposta.write('<h1>Informe o valor o parametro valor na url: http://localhost:3000/dinheiro?valor=100</h1>');
    }
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}

function converterCelsiusFahrenheit(requisicao, resposta)
{
    let grausCelsius = requisicao.query.grausCelsius;
    let sequencia = requisicao.query.sequencia;
    if(!sequencia)
    {
        sequencia = 1;
    }
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Conversor de graus Celsius para Fahrenheit</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    if(grausCelsius)
    {
        sequencia = parseInt(sequencia);
        grausCelsius = parseInt(grausCelsius);
        for(let i = 0; i < sequencia; i++)
        {
            const resultado = (grausCelsius * (9/5)) + 32;
            resposta.write('<h1> ' + grausCelsius + ' graus Celsius = ' + resultado + ' graus Fahrenheit </h1>');
            grausCelsius += 1;
        }
    }
    else{
        resposta.write('<h1> Informe o parametro grausCelsius na url: http://localhost:3000/conversor?grauCelsius=0</h1>');
    }
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}
function gerarTabuada(requisicao, resposta){
    let numero = requisicao.query.numero;
    let sequencia = requisicao.query.sequencia;
    if(!sequencia)
    {
        sequencia = 10;
    }
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    if(numero)
    {
        sequencia = parseInt(sequencia);
        numero = parseInt(numero);
        for(let i = 0; i < sequencia; i++)
        {
            const resultado = numero * i;
            resposta.write('<h1> ' + numero + ' x ' + i + ' = ' + resultado + '</h1>');
            numero += 1;
        }
    }
    else{
        resposta.write('<h1> Informe o parametro numero na url: http://localhost:3000/tabuada?numero=0</h1>');
    }
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}
app.get("/", retornaPaginaInicial);
app.get("/dinheiro", enviarDinheiro);
app.get("/conversor", converterCelsiusFahrenheit);
app.get("/tabuada", gerarTabuada);

app.listen(porta, host, ()  => {
    console.log("Servidor está executando em http://" + host + ":" + porta);
});