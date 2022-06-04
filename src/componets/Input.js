import React from "react";
import styled from "@emotion/styled";

const Styled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: white;
    margin-bottom: 0.5rem;
  }

  input {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
  }
`;

const Input = ({
  name,
  onChange,
  label,
  placeholder,
  type = "text",
  value,
}) => {
  return (
    <Styled>
      <label for={name}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </Styled>
  );
};

export default Input;
