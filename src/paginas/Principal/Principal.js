import {Fundo, CardP, CardR, Img, Imagem, Imagem1, BotaoVoltar,Label} from './Principal.jsx'
import Relogio from '../../assets/alarme.png';
//import Lua from '../../assets/lua.png'
//import Imagemfog from '../../assets/fogueira.jpg'
//import ImagemChu from '../../assets/chuvs.jpg'
//import Praia from '../../assets/praia-som.webp'
import {Stack} from '@chakra-ui/react'
import Footer from '../../componentes/footer/Footer.js'
import setaImg from '../../assets/seta.png';
import { Input, Button, Text } from '@chakra-ui/react';


import {Link} from "react-router-dom"
function Principal (){
      
    return(
        <>
        
        <Fundo>
            <BotaoVoltar>
              <Link to='../Login'>
                <Button colorScheme='blue' variant='link'>
                  <img src={setaImg} alt="Seta Voltar" style={{ marginRight: '5px', filter: 'invert(1)' }} />
                </Button>
              </Link>
            </BotaoVoltar>
            <CardP>
                 <Label>
                     <Text mb='5px' mr='0%' color='black' fontSize='24px' fontWeight='bold'>Alarme</Text>
                </Label>
            </CardP>

            <CardR>       
            </CardR>
            
            <Link to="/Fogueira">
            <Stack direction='column' spacing={5} align='center' height='100px'>
             <Button colorScheme='whiteAlpha' variant='ghost' height='500px' marginTop='245px' color='white' borderRadius='30vh'>
                FOGUEIRA LENTA
            </Button>    
            
            </Stack>
            </Link>

            <Link to="/Cadastro">
            <Stack direction='column' spacing={5} align='center' height='100px'>
             <Button colorScheme='whiteAlpha' variant='ghost' height='500px' marginTop='245px' color='white' borderRadius='30vh'>
                ONDAS DO MAR
            </Button>
           
            </Stack>
            </Link>

            <Link to="/Cadastro">
            <Stack direction='column' spacing={5} align='center' height='100px'>
             <Button colorScheme='whiteAlpha' variant='ghost' height='500px' marginTop='245px' color='white' borderRadius='30vh'>
                CHUVA DA TARDE
            </Button>
           
            </Stack>
            </Link>
            <Footer/>
        </Fundo>
        </>
    )
}

export default Principal