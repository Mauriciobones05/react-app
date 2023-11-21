import styled from 'styled-components';

//const MensagemAviso = ({ estilo, tipo, children }) => {
//  const estiloMensagem = {
//    padding: '10px',
//    border: `2px solid ${tipo === 'sucesso' ? 'green' : 'red'}`,
//    borderRadius: '5px',
//    color: tipo === 'sucesso' ? 'green' : 'red',
//    fontSize: estilo.fontSize || '16px',
//    textAlign: estilo.textAlign || 'left',
//    backgroundColor: tipo === 'sucesso' ? 'lightgreen' : 'lightcoral',
//    margin: '10px',
//    display: 'flex',
//    justifyContent: 'center', 
//    alignItems: 'center', 
//    height: '100vh', 
//    // Adicione outros estilos conforme necessário
//  };
//
//  return (
//    <div style={estiloMensagem}>
//      {children}
//    </div>
//  );
//};
//
export const MsgAviso = styled.div`
   padding: 10px,
   border: 2px solid ,
   borderRadius: 5px,
   fontSize: 16px,
   textAlign: left,
   backgroundColor: lightgreen,
   margin: 10px,
   display: flex,
   justifyContent: center, 
   alignItems: center, 
   height: 100vh, 

`