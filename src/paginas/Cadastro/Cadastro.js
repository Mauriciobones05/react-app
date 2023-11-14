import React, { useState } from 'react';
import { Fundo, Estilo, Card, BotaoCadastrar,BotaoVoltar ,Label} from "./Cadastro.jsx";
import { Input, Button, Text } from '@chakra-ui/react';
import Cad from './cad.js';
import { Link } from "react-router-dom";
import setaImg from '../../assets/seta.png';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = async () => {
        try {
            const response = await fetch('http://localhost:3000/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email, senha }),
            });

            const data = await response.json();

            if (response.status === 201) {
                console.log(data.mensagem);

                // Adicionar mensagem para falar que usuario foi cadastrado
                <Link to='../Login'></Link>
            } else if (response.status === 400) {
                console.log(data.mensagem);
            } else {
                console.error('Erro ao cadastrar:', data.mensagem);
            }
        } catch (error) {
            console.error('Erro na solicitação de cadastro:', error);
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
                    <Text mb='5px' mr='0%' color='white' fontSize='24px' fontWeight='bold' onClick={handleCadastro}>Cadastrar Usuário</Text>    
                </Label>

                <Card justifyContent='space-between' align='left'>
                    <Estilo>
                        <Text mb='8px' mr='50%' color='white'>Nome</Text>
                        <Input variant='Nome' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />

                        <Text mb='8px' mr='80%' color='white' mt='5'>Email</Text>
                        <Input type='email'  variant='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <Text mb='8px' mr='80%' color='white' mt='5'>Senha</Text>
                        <Input type='password' variant='Senha' placeholder='Senha' />

                        <Text mb='8px' mr='50%' color='white' mt='5'>Confirmar Senha</Text>
                        <Input type='password' variant='Confirmar senha' placeholder='Confirmar senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    </Estilo>
                </Card>
                {/* Renderizando o componente Cad */}
                <Cad />
                <BotaoCadastrar>
                    <Link to='/Principal'>
                        <Button background="#0D99FF" mt='60' color='white' height='50px' width='110%' borderRadius='70px' fontFamily='arial'>Cadastrar</Button>
                    </Link>
                </BotaoCadastrar>
            </Fundo>
        </>
    );
}

export default Cadastro;
