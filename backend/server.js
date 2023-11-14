const express = require('express');
const app = express();
const port = 3000;

const database = require('./database'); // Importa a conexão com o banco de dados

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
