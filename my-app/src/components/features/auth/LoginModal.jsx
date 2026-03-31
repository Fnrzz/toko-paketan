import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import LoginForm from "./LoginForm";

const LoginModal = ({ textButton = "Login" }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="px-4 py-2 rounded-full w-full">
          {textButton}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center py-4 gap-4">
          <DialogTitle className="text-lg font-bold">Login</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Login to your account
          </DialogDescription>
          <LoginForm onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
