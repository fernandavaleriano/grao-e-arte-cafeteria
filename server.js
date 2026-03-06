const express = require('express');
const path = require('path');
const app = express();
const porta = 3000;

// Configura o Express para servir os arquivos da pasta atual
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(porta, () => {
    console.log(`Site Grão & Arte rodando em: http://localhost:${porta}`);
});