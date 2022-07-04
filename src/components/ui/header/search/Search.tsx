import React, { ChangeEvent, FC, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Search: FC = () => {
  const [search, setSearch] = useState("");

  let navigate = useNavigate();

  const searchEnterHandler = (e: any) => {
    if (e.key === "Enter") {
      navigate(`/search/${search}`);
    }
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <FiSearch size={18} />
      <Input
        placeholder="Seach 2M+ recipes"
        value={search}
        onKeyDown={searchEnterHandler}
        onChange={searchHandler}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  width: 600px;
  padding: 15px;
  background: #f5f5f5;

  @media (max-width: 1300px) {
    width: 100%;
    margin: 20px 0px 0px 0px;
  }

  @media (max-width: 700px) {
    padding: 10px;
  }
`;

const Input = styled.input`
  border: none;
  color: #afafaf;
  margin-left: 15px;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #afafaf;
  }
`;

export default Search;
