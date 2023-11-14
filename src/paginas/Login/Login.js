import { Fundo, CardLogin, Imagem, Estilização, Texto, BotaoEntrar } from "./Login.jsx";
import ImgLogo from '../../assets/logoss.png';
import { Input, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Login() {
    return (
        <Fundo>
            <Imagem src={ImgLogo} />
            <CardLogin>
                <Estilização>
                    <Texto>Email</Texto>
                    <Input variant='Email' placeholder='Digite seu email' width='90%' height='35px'/>

                    <Texto>Senha</Texto>
                    <Input variant='Senha' placeholder='Digite sua senha' width='90%' height='35px'/>
                </Estilização>
                <Link to="/Cadastro">
                    <Button colorScheme='blue' variant='link' marginLeft='290px'>Cadastrar</Button>
                </Link>
            </CardLogin>

            <BotaoEntrar>
                <Link to="/Principal">
                    <Button background="#0D99FF" color='white' height='50px' width='40%' marginLeft='30%' borderRadius='70px'>Entrar</Button>
                </Link>
            </BotaoEntrar>
        </Fundo>
    )
}

export default Login;
