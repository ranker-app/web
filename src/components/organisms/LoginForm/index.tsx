import React, { useState } from "react";
import { Container, Content, Form } from "./styles";
import Anchor from "@/components/atoms/Anchor";

interface Login {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [login, setLogin] = useState<Login>({
    email: "",
    password: "",
  });

  const handleFormFieldChange = (e: any) => {
    setLogin((previousLogin) => ({
      ...previousLogin,
      [e.target.name]: e.target.value,
    }));
  };

  const doLogin = () => {
    alert("Gonna login");
  };

  return (
    <Container>
      <Content>
        <Form>
          <fieldset>
            <label>Email</label>
            <input type="email" name="email" onChange={handleFormFieldChange} />
          </fieldset>

          <fieldset>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleFormFieldChange}
            />
          </fieldset>

          <button type="button" onClick={doLogin}>
            Login
          </button>
        </Form>
        <Anchor href="/signup">Already have an account ? Sign Up</Anchor>
      </Content>
    </Container>
  );
};

export default LoginForm;
