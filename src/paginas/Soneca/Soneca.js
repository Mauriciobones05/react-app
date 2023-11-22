import {Fundo, BotaoVoltar} from './Soneca.jsx'
import Footer from '../../componentes/footer/Footer.js'
import {Link} from "react-router-dom"
import {Button} from '@chakra-ui/react'
import setaImg from '../../assets/seta.png'
function Soneca (){
      
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

            <Footer/>

        </Fundo>
        </>
    )
}

export default Soneca