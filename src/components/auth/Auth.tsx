import { FC, useState } from "react";
import styled from "styled-components";
import { BiHide } from "react-icons/bi";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAppDispatch } from "../../store/store";
import { loginHandler, registerHandler } from "../../store/user/asyncActions";
import Progress from "../ui/progress/Progress";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";

const Auth: FC = () => {
  const [toggleAuth, setToggleAuth] = useState(false);
  const [hidePass, setHidePass] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const { status } = useTypedSelector((state) => state.user);

  const login = () => {
    dispatch(loginHandler({ email, password }));
  };

  const register = () => {
    dispatch(registerHandler({ username, email, password }));
  };

  return (
    <Container>
      <Title>
        {!toggleAuth
          ? "Hello! Register to get started"
          : "Welcome back! Glad to see you, Again!"}
      </Title>
      <Form>
        {!toggleAuth && (
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Password>
          <Input
            placeholder="Password"
            type={!hidePass ? "password" : "text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <HidePass onClick={() => setHidePass(!hidePass)} />
        </Password>
      </Form>
      <Button onClick={!toggleAuth ? register : login}>
        {status === "loading" ? (
          <Progress />
        ) : !toggleAuth ? (
          "Register"
        ) : (
          "Login"
        )}
      </Button>
      <ToggleAuth>
        {!toggleAuth ? (
          <>
            Already have an account?{" "}
            <span onClick={() => setToggleAuth(!toggleAuth)}>Login Now</span>
          </>
        ) : (
          <>
            Don’t have an account?{" "}
            <span onClick={() => setToggleAuth(!toggleAuth)}>Register Now</span>
          </>
        )}
      </ToggleAuth>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  max-width: 400px;
  margin: 0 auto;
  padding-top: 80px;

  @media (max-width: 450px) {
    margin: 20px 20px;
    padding-top: 30px;
  }
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

const Password = styled.div``;

const HidePass = styled(BiHide)`
  font-size: 1.3em;
  color: #696969;
  cursor: pointer;
  position: relative;
  top: -52px;
  right: -357px;

  @media (max-width: 450px) {
    right: -340px;
  }

  @media (max-width: 420px) {
    right: -320px;
  }

  @media (max-width: 395px) {
    right: -300px;
  }

  @media (max-width: 380px) {
    right: -280px;
  }

  @media (max-width: 355px) {
    right: -260px;
  }

  @media (max-width: 325px) {
    right: -220px;
  }
`;

const ToggleAuth = styled.div`
  display: flex;
  font-weight: 500;

  & span {
    margin-left: 3px;
    color: #fdaa0f;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      transition: all 0.5s;
      color: #d36600;
    }
  }
`;
