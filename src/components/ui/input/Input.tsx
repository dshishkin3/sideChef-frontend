import React, { FC } from "react";
import styled from "styled-components";

interface IInputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (arg0: any) => void;
}

const Input: FC<IInputProps> = ({ placeholder, type, value, onChange }) => {
  return (
    <Container
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

const Container = styled.input`
  border: 1px solid #e0e0e0;
  background: #f7f7f7;
  margin-bottom: 12px;
  color: #8391a1;
  border-radius: 8px;
  padding: 18px;
  font-weight: 500;
  width: -webkit-fill-available;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #afafaf;
  }
`;

export default Input;
