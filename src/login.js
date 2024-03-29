import React, { useState } from "react";
import { Button, Card, Form, Input } from "semantic-ui-react";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = () => {
    alert(`${email}, ${password}`);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Card>
        <Form>
          <Form.Field>
            <Input
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Button onClick={onLoginPressed} className="login__form__button">
              Login
            </Button>
          </Form.Field>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
