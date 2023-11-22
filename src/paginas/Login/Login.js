import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fundo, CardLogin, Imagem, Estilização, Texto, BotaoEntrar } from "./Login.jsx";
import ImgLogo from '../../assets/logoss.png';
import { Input, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Login() {
  const navegate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      // Faça a solicitação de login para a sua API
      const resposta = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await resposta.json();

      // Verifique a resposta da API
      if (resposta.ok) {
        navegate('/Principal');
      } else {
        // Exiba uma mensagem de erro ou tome outra ação apropriada
        console.error('Erro de login:', dados.mensagem);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <Fundo>
      <Imagem src={ImgLogo} />
      <CardLogin>
        <Estilização>
          <Texto>Email</Texto>
          <Input
            variant='Email'
            placeholder='Digite seu email'
            width='90%'
            height='35px'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Texto>Senha</Texto>
          <Input
            type='password'
            variant='Senha'
            placeholder='Digite sua senha'
            width='90%'
            height='35px'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Estilização>
        <Link to="/Cadastro">
          <Button colorScheme='blue' variant='link' marginLeft='290px'>
            Cadastrar
          </Button>
        </Link>
      </CardLogin>

      <BotaoEntrar>
        <Link to="/Principal">
           <Button background="#0D99FF" color='white' height='50px' width='40%' marginLeft='30%' borderRadius='70px' //onClick={handleLogin}
           >Entrar </Button>
        </Link>
      </BotaoEntrar>
    </Fundo>
  );
}

export default Login;
