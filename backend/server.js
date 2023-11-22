const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
//const router = express.Router();
const db = require('/Dev/finalpp-main/backend/database');
//const { verificarCredenciais } = require('/Dev/finalpp-main/backend/auth/authFunctions');
const rota = require('/Dev/finalpp-main/backend/routes/authRoutes');

// Configuração do middleware para permitir requisições JSON
app.use(express.json());
app.use(cors());

app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios ORDER BY id',(err,result) => {
    if(err){
      res.send(err);
    }
    res.send(result);
  })
});

app.post('/cadastro', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  const resultadoCadastro = await rota.insertUsuario(req.body);

  // Verifique o status retornado pela função insertUsuario
  if (resultadoCadastro.status === 201) {
    return res.status(201).json({ mensagem: 'Registro bem-sucedido' });
  } else if (resultadoCadastro.status === 400) {
    return res.status(400).json({ mensagem: 'Email já está em uso' });
  } else {
    return res.status(500).json({ mensagem: 'Erro interno' });
  }
});


app.post('/login', async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  const resultadoConsulta = await rota.verificaUsuario(req.body);

  if (resultadoConsulta.status === 200) {
    return res.status(200).json({ mensagem: 'Login realizado com sucesso' });
  } else if (resultadoConsulta.status === 400) {
    return res.status(400).json({ mensagem: 'Email e/ou senha inválidos', erro: resultadoConsulta.erro });
  } else {
    return res.status(500).json({ mensagem: 'Erro interno', erro: resultadoConsulta.erro });
  }
});

//module.exports = router;

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
