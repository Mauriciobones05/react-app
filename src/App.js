import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Rotas from './rotas/Rotas.js';




function App() {
  return (
  <>
    <ChakraProvider>
    
    <Rotas/>
 
    </ChakraProvider>
  </>
    
  );
}

export default App;

