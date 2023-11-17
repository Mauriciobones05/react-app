const express = require('express');
const router = express.Router();
const db = require('/Dev/finalpp-main/backend/database');
//const { verificarCredenciais } = require('../auth/authFunctions');

// rotina de login
// router.post('/login', (req, res) => {
//     const { email, senha } = req.body;
  
//     verificarCredenciais(email, senha, (err, usuario) => {
//       if (err) {
//         return res.status(401).json({ mensagem: 'Email e/ou Senha inválido' });
//       }

//       return res.status(200).json({ mensagem: 'Login bem-sucedido', usuario });
//     });
// });

 // rotina de cadastro
router.post('/cadastro', (req, res) => {
    const { nome, email, senha, ativo } = req.body;
  
    // verifica se o email já está em uso
    const verificaEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(verificaEmailQuery, [email], (err, result) => {
    if (err) {
      console.error('Erro na consulta SQL:', err);
      return res.status(500).json({ mensagem: 'Erro interno' });
    }
  
       if (result.length > 0) {
         // Um usuário com o mesmo email já existe
        return res.status(400).json({ mensagem: 'Email já está em uso' });
       } else {
         const insertQuery = 'INSERT INTO usuarios (nome, email, senha, ativo) VALUES (?, ?, ?, ?)';
         db.query(insertQuery, [nome, email, senha, ativo], (err, result) => {
          if (err) {
            console.error('Erro na consulta SQL:', err);
             return res.status(500).json({ mensagem: 'Erro interno' });
          }
          
           return res.status(201).json({ mensagem: 'Registro bem-sucedido' });
         });
       }
     });
});

async function insertUsuario(usuario) {
  try {
    // Verifica se o email já está em uso
    const verificaEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
    const result = await db.query(verificaEmailQuery, [usuario.email]);

    if (result && result.length > 0) {
      // Um usuário com o mesmo email já existe
      return { status: 400, mensagem: 'Email já está em uso' };
    }
    else {
      // Insere o novo usuário
      const insertQuery = 'INSERT INTO usuarios (nome, email, senha, ativo) VALUES (?, ?, ?, ?)';
      const values = [usuario.nome, usuario.email, usuario.senha, usuario.ativo];
      await db.query(insertQuery, values);
      return { status: 201, mensagem: 'Registro bem-sucedido' };
    }
  } catch (error) {
    console.error('Erro na consulta SQL:', error);
    return { status: 500, mensagem: 'Erro interno' };
  }
}

//module.exports = router;

module.exports = {insertUsuario};
