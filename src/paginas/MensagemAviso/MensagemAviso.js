// MensagemAviso.jsx
import React from 'react';

function MensagemAviso({ mensagem, tipo }) {
  return (
    <div style={{ color: tipo === 'sucesso' ? 'green' : 'red' }}>
      {mensagem}
    </div>
  );
}

export default MensagemAviso;
