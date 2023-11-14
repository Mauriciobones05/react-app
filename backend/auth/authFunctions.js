const db = require('./database'); 

// Função para verificar as credenciais de login
function verificarCredenciais(email, senha, callback) {
  const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  db.query(query, [email, senha], (err, result) => {
    if (err) {
      console.error('Erro na consulta SQL:', err);
      return callback(err, null);
    }

    if (result.length > 0) {
      return callback(null, result[0]);
    } else {
      return callback('Email e/ou Senha inválido', null);
    }
  });
}

module.exports = { verificarCredenciais };
