import React, { FC, useState } from "react";
import { useAppDispatch } from "../store/store";
import { loginHandler, registerHandler } from "../store/user/asyncActions";

const Profile: FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(loginHandler({ email, password }));
  };

  const register = () => {
    dispatch(registerHandler({ username, email, password }));
  };

  return (
    <div>
      {/* <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>login</button> */}

      <div>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>register</button>
      </div>
    </div>
  );
};

export default Profile;
