import React from "react";
import LoginModal from "../features/auth/LoginModal";

const Navbar = () => {
  return (
    <div className="flex px-10 py-2 items-center justify-between">
      <a href="/" className="text-xl font-bold">
        Toko Paketan
      </a>
      <div className="flex gap-4 items-center">
        <a href="">Telkomsel</a>
        <a href="">Indosat</a>
        <a href="">XL</a>
      </div>
      <LoginModal />
    </div>
  );
};

export default Navbar;
