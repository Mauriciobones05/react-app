//const express = require('express');
//const router = express.Router();
const db = require('/Dev/finalpp-main/backend/database');
//const { verificarCredenciais } = require('../auth/authFunctions');
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
      const insertQuery = "INSERT INTO usuarios (nome, email, senha, ativo) VALUES (?, ?, ?, 'S')";
      const values = [usuario.nome, usuario.email, usuario.senha];
      await db.query(insertQuery, values);
      return { status: 201, mensagem: 'Registro bem-sucedido' };
    }
  } catch (error) {
    console.error('Erro na consulta SQL:', error);
    return { status: 500, mensagem: 'Erro interno' };
  }
}

async function verificaUsuario(usuario) {
  try {
    const selectQuery = "SELECT * FROM usuarios WHERE email = '?' AND senha = '?'";
    const values = [usuario.email, usuario.senha];

    const resultadoConsulta = await db.query(selectQuery, values);
    //const totalConsulta = resultadoConsulta[0];

    if (resultadoConsulta.length > 0) {
      return { status: 200, mensagem: 'Login realizado com sucesso' };
    } else {
      return { status: 400, mensagem: 'Email e/ou Senhaaaaa inválidos' };
    }
  } catch (error) {
    console.error('Erro na consulta SQL:', error);
    return { status: 500, mensagem: 'Erro interno', erro: error.message };
  }
}


module.exports = {insertUsuario,verificaUsuario};
