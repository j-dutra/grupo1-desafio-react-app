import React from "react";
import styled from "@emotion/styled";
import Input from "./Input";
import { api } from "../service/api";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import animationData from "./loading-animation.json";

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

  .animation svg {
    padding: 0;
  }
`;

const initialState = { name: "", email: "" };

const Form = () => {
  const [data, setData] = React.useState(initialState);
  const [loading, setLoading] = React.useState(false);

  const handleChange = React.useCallback(
    (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    },
    [data, setData]
  );

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      setLoading(true);

      api
        .post("", data)
        .then((res) => {
          console.log(data);
          setLoading(false);
          toast("Mensagem enviada com sucesso", {
            type: "success",
          });
        })
        .catch((err) => {
          console.log(data);
          setLoading(false);
          toast("Algo deu errado", {
            type: "error",
          });
        });
    },
    [data, api, toast]
  );

  return (
    <Styled>
      <form className="form" onSubmit={handleSubmit}>
        {loading ? (
          <Lottie
            className="animation"
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
            height={221}
            width={245}
            isStopped={false}
            isPaused={false}
          />
        ) : (
          <>
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
            <button type="submit">Enviar</button>
          </>
        )}
      </form>
    </Styled>
  );
};

export default Form;
