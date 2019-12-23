import React, { useState } from "react";
import { Button, Card, Form, Input } from "semantic-ui-react";

import "./login.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const onSignUpPressed = () => {
    alert(`${email}, ${password}`);
  };

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <Card>
        <Form>
          <Form.Field>
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={e => setName(e.target.value)}
            />
          </Form.Field>
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
            <Input
              type="password"
              name="c-password"
              placeholder="Enter your password again"
              value={confirmedPassword}
              onChange={e => setConfirmedPassword(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Button onClick={onSignUpPressed} className="login__form__button">
              Sign Up
            </Button>
          </Form.Field>
        </Form>
      </Card>
    </div>
  );
}

export default SignUp;
