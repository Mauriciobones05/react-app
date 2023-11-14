const mysql = require('mysql');

// dados de conexao mysql 
const database = mysql.createConnection({
  host: 'localhost',
  user: 'bones',
  password: 'bones',
  database: 'aplicativo',
});

database.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida');
});

module.exports = database;
