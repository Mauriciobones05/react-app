import React, { useState } from 'react';
import { Fundo, Estilo, Card, BotaoCadastrar, BotaoVoltar, Label } from "./Cadastro.jsx";
import { Input, Button, Text } from '@chakra-ui/react';
import { Link,useNavigate } from "react-router-dom";
import setaImg from '../../assets/seta.png';
import MsgAviso from '../MensagemAviso/MensagemAviso.js'; 

function Cadastro() {
  const navegate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');
  
  const handleCadastro = async () => {
    try {
      const response = await fetch('http://localhost:3001/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setMensagem('Cadastro realizado');
        setTipoMensagem('sucesso');
        setMostrarMensagem(true);

        setTimeout(() => {
          navegate('/login');
        }, 2000);
      } else if (response.status === 400) {
        setMensagem(data.mensagem);
        setTipoMensagem('erro');
        setMostrarMensagem(true);
      } else {
        setMensagem(`Erro ao cadastrar: ${data.mensagem}`);
        setTipoMensagem('erro');
        setMostrarMensagem(true);
      }
    } catch (error) {
      setMensagem(`Erro na solicitação de cadastro: ${error.message}`);
      setTipoMensagem('erro');
      setMostrarMensagem(true);
    }
  };
  
  return (
    <>
      <Fundo>
        <BotaoVoltar>
          <Link to='../Login'>
            <Button colorScheme='blue' variant='link'>
              <img src={setaImg} alt="Seta Voltar" style={{ marginRight: '5px', filter: 'invert(1)' }} />
            </Button>
          </Link>
        </BotaoVoltar>
        <Label>
          <Text mb='5px' mr='0%' color='white' fontSize='24px' fontWeight='bold'>Cadastrar Usuário</Text>
        </Label>

        <Card justifyContent='space-between' align='left'>
          <Estilo>
            <Text mb='8px' mr='50%' color='white'>Nome</Text>
            <Input variant='Nome' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />

            <Text mb='8px' mr='80%' color='white' mt='5'>Email</Text>
            <Input type='email' variant='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

            <Text mb='8px' mr='80%' color='white' mt='5'>Senha</Text>
            <Input type='password' variant='Senha' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />

            <Text mb='8px' mr='50%' color='white' mt='5'>Confirmar Senha</Text>
            <Input type='password' variant='Confirmar senha' placeholder='Confirmar senha' />
          </Estilo>
        </Card>

        

        <BotaoCadastrar>
          <Button onClick={handleCadastro} background="#0D99FF" mt='60' color='white' height='50px' width='110%' borderRadius='70px' fontFamily='arial'>Cadastrar</Button>
        </BotaoCadastrar>
        {/* Exibir a mensagem de aviso */}
        {mostrarMensagem && <MsgAviso mensagem={mensagem} tipo={tipoMensagem} />}
      </Fundo>
    </>
  );
}

export default Cadastro;
