import {Fundo, CardP, CardR, Img, Imagem, Imagem1} from './Principal.jsx'
import Relogio from '../../assets/alarme.png'
import Lua from '../../assets/lua.png'
import Imagemfog from '../../assets/fogueira.jpg'
import ImagemChu from '../../assets/chuvs.jpg'
import Praia from '../../assets/praia-som.webp'
import {Button} from '@chakra-ui/react'
import {Stack} from '@chakra-ui/react'
import Footer from '../../componentes/footer/Footer.js'


import {Link} from "react-router-dom"
function Principal (){
      
    return(
        <>
        
        <Fundo>
            
            
            <CardP>
                <Img src={Relogio}/>

            </CardP>

            <CardR>   
                <Imagem src={Lua}/>
            </CardR>
            
            <Link to="/Fogueira">
            <Stack direction='column' spacing={5} align='center' height='100px'>
 
             <Button colorScheme='whiteAlpha' variant='ghost' height='500px' marginTop='245px' color='white' borderRadius='30vh'>
                FOGUEIRA LENTA
            </Button>
           
            <Imagem1 src={Imagemfog} left='100px'/>
            </Stack>
            </Link>


            <Link to="/Cadastro">
            <Stack direction='column' spacing={5} align='center' height='100px'>
 
             <Button colorScheme='whiteAlpha' variant='ghost' height='500px' marginTop='245px' color='white' borderRadius='30vh'>
                ONDAS DO MAR
            </Button>
           
            <Imagem src={Praia} left='100px'/>
            </Stack>
            </Link>


            <Link to="/Cadastro">
            <Stack direction='column' spacing={5} align='center' height='100px'>
 
             <Button colorScheme='whiteAlpha' variant='ghost' height='500px' marginTop='245px' color='white' borderRadius='30vh'>
                CHUVA DA TARDE
            </Button>
           
            <ImagemChu src={ImagemChu} left='100px'/>
            </Stack>
            </Link>
            <Footer/>
        </Fundo>
        </>
    )
}

export default Principal