import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";

function FormularioContacto() {
  const [User, setUser] = useState("");


  
  const [email, setEmail] = useState("email@example.com");
  const [mensaje, setMensaje] = useState("Este es un mensaje predeterminado.");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="User">
        <Form.Label>User</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu usuario"
          value={User}
          onChange={(e) => setUser(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="mensaje">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Escriba su mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default FormularioContacto;