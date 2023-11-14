import { MenuContainer } from "./Footer.jsx";
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { NormalIcon } from "./Footer.jsx";
import { useNavigate } from "react-router-dom";


function Footer() {
    const navigate = useNavigate()
 
 
 
    const goToInicial = () => {
        navigate('/Principal')
 
    }

    const goToSoneca = () => {
        navigate('/Soneca')
 
    }

    const goToDicas = () => {
        navigate('/Dicas')
 
    }
    return (
        <>
            <MenuContainer>
                <Tabs variant='soft-rounded' colorScheme='blue'>
                    <TabList w='88vw' justifyContent='space-between'>
 
                    <Tab onClick={goToInicial}>Início</Tab>

                    <Tab onClick={goToSoneca}>Soneca</Tab>

                    <Tab onClick={goToDicas}>Dicas</Tab>
                    </TabList>
                </Tabs>
                
            </MenuContainer>
        </>
    );
    }
 
export default Footer;