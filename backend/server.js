const express = require('express');
const app = express();
const port = 3001;
//const router = express.Router();
const db = require('/Dev/finalpp-main/backend/database');
//const { verificarCredenciais } = require('/Dev/finalpp-main/backend/auth/authFunctions');
const rota = require('/Dev/finalpp-main/backend/routes/authRoutes');

// Configuração do middleware para permitir requisições JSON
app.use(express.json());

app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios ORDER BY id',(err,result) => {
    if(err){
      res.send(err);
    }
    res.send(result);
  })
});

// router.post('/login', (req, res) => {
//   const { email, senha } = req.body;

//   verificarCredenciais(email, senha, (err, usuario) => {
//     if (err) {
//       return res.status(401).json({ mensagem: 'Email e/ou Senha inválido' });
//     }

//     return res.status(200).json({ mensagem: 'Login bem-sucedido', usuario });
//   });
// });

// rotina de cadastro
// router.post('/cadastro', (req, res) => {
// const { nome, email, senha } = req.body;

//   // verifica se o email já está em uso
//   const verificaEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
//   db.query(verificaEmailQuery, [email], (err, result) => {
//     if (err) {
//       console.error('Erro na consulta SQL:', err);
//       return res.status(500).json({ mensagem: 'Erro interno' });
//     }

//     if (result.length > 0) {
//       // Um usuário com o mesmo email já existe
//       return res.status(400).json({ mensagem: 'Email já está em uso' });
//     } else {
//       const insertQuery = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?);';
//       db.query(insertQuery, [nome, email, senha], (err, result) => {
//         if (err) {
//           console.error('Erro na consulta SQL:', err);
//           return res.status(500).json({ mensagem: 'Erro interno' });
//         }
        
//         return res.status(201).json({ mensagem: 'Registro bem-sucedido' });
//       });
//     }
//   });
// });

app.post('/cadastro',async(req,res) => {
  const resultadoCadastro = await rota.insertUsuario(req.body);

  // Verifique o status retornado pela função insertUsuario
  if (resultadoCadastro.status === 201) {
    return res.status(201).json({ mensagem: 'Registro bem-sucedido' });
  } else if (resultadoCadastro.status === 400) {
    return res.status(400).json({ mensagem: 'Email já está em uso' });
  } else {
    return res.status(500).json({ mensagem: 'Erro interno' });
  }
})

//module.exports = router;

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
