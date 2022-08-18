import { FC, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import styled from "styled-components";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAppDispatch } from "../../store/store";
import { fetchUser, updateHandler } from "../../store/user/asyncActions";
import { logout, setError } from "../../store/user/user.slice";
import { IUpdate, User } from "../../store/user/user.types";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";

import { validateForm } from "./validate";

const MyProfile: FC = () => {
  const { user } = useTypedSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const [hidePass, setHidePass] = useState(false);

  const [username, setUsername] = useState(user!.username);
  const [email, setEmail] = useState(user!.email);
  const [password, setPassword] = useState("");

  const changeInfo = async () => {
    const form: IUpdate = {
      _id: user!._id,
      username,
      email,
    };

    if (password !== "") {
      form.password = password;
    }

    if (validateForm(form)) {
      await dispatch(updateHandler({ form }));
      await dispatch(fetchUser(user!._id));
    } else {
      dispatch(setError("Fields filled out incorrectly"));
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Title>Personal data</Title>

      {!user ? (
        <h1>loading...</h1>
      ) : (
        <Form>
          <TextArea>
            <p>Username</p>
            <Input
              type="text"
              placeholder={user.username}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </TextArea>
          <TextArea>
            <p>Email</p>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </TextArea>
          <TextArea>
            <p>Password</p>
            <Password>
              <Input
                placeholder="************"
                type={!hidePass ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!hidePass && <HidePass onClick={() => setHidePass(!hidePass)} />}
              {hidePass && <OpenPass onClick={() => setHidePass(!hidePass)} />}
            </Password>
          </TextArea>
        </Form>
      )}
      <Button onClick={changeInfo}>Save</Button>
      <Logout onClick={logoutHandler}>Logout</Logout>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;
  max-width: 450px;

  @media (max-width: 1820px) {
    margin: 0px 150px;
    padding: 50px 0px;
  }

  @media (max-width: 1550px) {
    margin: 0px 225px;
  }

  @media (max-width: 1300px) {
    margin: 0 auto;
    padding: 30px 20px;
  }
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const TextArea = styled.div`
  margin-bottom: 15px;

  & p {
    margin-bottom: 10px;
  }
`;

const Form = styled.div``;

const Password = styled.div``;

const HidePass = styled(AiFillEyeInvisible)`
  font-size: 1.3em;
  color: #696969;
  cursor: pointer;
  position: relative;
  top: -52px;
  right: -397px;

  @media (max-width: 1300px) {
    right: -370px;
  }

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

  @media (max-width: 360px) {
    right: -250px;
  }

  @media (max-width: 325px) {
    right: -220px;
  }

  @media (max-width: 295px) {
    right: -150px;
  }
`;

const OpenPass = styled(AiFillEye)`
  font-size: 1.3em;
  color: #696969;
  cursor: pointer;
  position: relative;
  top: -52px;
  right: -397px;

  @media (max-width: 1300px) {
    right: -370px;
  }

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

  @media (max-width: 360px) {
    right: -250px;
  }

  @media (max-width: 325px) {
    right: -220px;
  }

  @media (max-width: 295px) {
    right: -150px;
  }
`;

const Logout = styled.button`
  width: 225px;
  background: #575757;
  border-radius: 8px;
  color: #fff;
  padding: 19px 0px;
  margin-bottom: 30px;
  font-weight: 600;
  transition: all 0.5s;
  cursor: pointer;
  border: none;

  &:hover {
    transition: all 0.5s;
    box-shadow: 0px 0px 30px -15px #575757;
  }
`;

export default MyProfile;
