import React from 'react';
import '../styles/formulario.css';

function Formulario() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que se envíe el formulario por defecto
    
    // Aquí podrías agregar la lógica para enviar el ticket a través de una solicitud HTTP, si es necesario
    
    // Muestra un alert indicando que el ticket ha sido enviado
    alert('¡El ticket ha sido enviado!');
  };

  return (
    <div className="form-container">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="campo1">Correo:</label><br />
        <input type="text" id="campo1" name="campo1" required /><br /><br />

        <label htmlFor="campo2">Nombre:</label><br />
        <input type="text" id="campo2" name="campo2" required /><br /><br />

        <label htmlFor="campo3">Telefono:</label><br />
        <input type="text" id="campo3" name="campo3" required /><br /><br />

        <label htmlFor="campo4">Empresa:</label><br />
        <input type="text" id="campo4" name="campo4" required /><br /><br />

        <label htmlFor="campo5">Descripción:</label><br />
        <input type="text" id="campo5" name="campo5" required /><br /><br />

        <button type="submit">Enviar</button>
        <button type="reset">Limpiar</button>
      </form>
    </div>
  );
}

export default Formulario;
