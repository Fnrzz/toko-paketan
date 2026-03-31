import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Login } from "@/services/auth/login";
import { useAuthStore } from "@/store/useAuthStore";
import React, { useState } from "react";

const LoginForm = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    setIsLoading(true);
    try {
      const response = await Login(payload);
      if (response.success) {
        setAuth(response.user);
        onSuccess();
      } else {
        setError(response.error);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full" onSubmit={handleLogin}>
      <FieldGroup>
        <Field>
          <FieldLabel>Username</FieldLabel>
          <Input type="text" name="username" placeholder="Username" />
        </Field>
        <Field>
          <FieldLabel>Password</FieldLabel>
          <Input type="password" name="password" placeholder="Password" />
        </Field>
        {error && <p className="text-center text-destructive">{error}</p>}
        <Field>
          <Button
            size="lg"
            className="rounded-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
