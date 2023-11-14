import React from 'react';

const Cadastro = ({ nome, email, senha }) => {
  const handleRegistro = async () => {
    try {
      const response = await fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (response.status === 201) {
        console.log('Registro bem-sucedido');
      } else if (response.status === 400) {
        console.log('Email já está em uso');
      } else {
        console.error('Erro ao registrar');
      }
    } catch (error) {
      console.error('Erro na solicitação de registro:', error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      {/* Não são necessários inputs aqui, pois os dados são recebidos como props */}
      <button onClick={handleRegistro}>Cadastrar</button>
    </div>
  );
};

export default Cadastro;
