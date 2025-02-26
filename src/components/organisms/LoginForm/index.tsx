import React, { useState } from "react";
import { Container, Content } from "./styles";
import Anchor from "@/components/atoms/Anchor";
import useForm from "@/hooks/useForm";
import { Form } from "@/styles/Form";

interface Login {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [login, setLogin] = useState<Login>({
    email: "",
    password: "",
  });

  const { handleFormFieldChange } = useForm({ setState: setLogin });

  const doLogin = () => {
    alert("Gonna login");
  };

  return (
    <Container>
      <Content>
        <Form>
          <fieldset>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleFormFieldChange}
              value={login.email}
            />
          </fieldset>

          <fieldset>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleFormFieldChange}
              value={login.password}
            />
          </fieldset>

          <button type="button" onClick={doLogin}>
            Login
          </button>
        </Form>
        <Anchor href="/signup">Create an account</Anchor>
      </Content>
    </Container>
  );
};

export default LoginForm;
