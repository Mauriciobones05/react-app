import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../paginas/Login/Login";
import Cadastro from "../paginas/Cadastro/Cadastro";
import Principal from "../paginas/Principal/Principal";
import Dicas from "../paginas/Dicas/Dicas";
import Soneca from "../paginas/Soneca/Soneca";
import Fogueira  from "../paginas/Fogueira/Fogueira";


function Rotas (){

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}path="/Login"/>
                <Route element={<Cadastro/>} path="/Cadastro"/>
                <Route element={<Principal/>} path="/Principal"/>
                <Route element={<Dicas/>} path="/Dicas"/>
                <Route element={<Soneca/>} path="/Soneca"/>
                <Route element={<Fogueira/>} path="/Fogueira"/>
                
            </Routes>
        </BrowserRouter>
        
    )
}

export default Rotas;