import React from "react";
import styled from "@emotion/styled";
import Input from "./Input";

const Styled = styled.div`
  padding: 0;
  height: 100vh;
  width: 100vw;
  background: #454056;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    border: 2px solid #fd5631;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    color: white;
    background: #fd5631;
    border: none;
    border-radius: 0.5rem;
  }
`;

const initialState = { name: "", email: "" };

const Form = () => {
  const [data, setData] = React.useState(initialState);

  const handleChange = React.useCallback(
    (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    },
    [data, setData]
  );

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      console.log(data);
    },
    [data]
  );

  return (
    <Styled>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          name="name"
          label="Nome"
          placeholder="Digite seu nome"
        />
        <Input
          onChange={handleChange}
          name="email"
          label="Email"
          placeholder="Digite seu melhor email"
        />
        <button type="submit"> Enviar</button>
      </form>
    </Styled>
  );
};

export default Form;
