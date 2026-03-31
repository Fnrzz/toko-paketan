import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Login } from "@/services/auth/login";
import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    console.log("Username:", username);
    console.log("Password:", password);
    const result = await Login(username, password);

    if (!result.success) {
      console.log(result.error);
      setError(result.error);
    }

    if (result.success) {
      console.log("Login successful");
      setError("");
    }
  };

  return (
    <FieldGroup>
      <Field>
        <FieldLabel>Username</FieldLabel>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Field>
      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Field>
      {error && <p className="text-center text-destructive">{error}</p>}
      <Field>
        <Button size="lg" className="rounded-full" onClick={handleLogin}>
          Login
        </Button>
      </Field>
    </FieldGroup>
  );
};

export default LoginForm;
