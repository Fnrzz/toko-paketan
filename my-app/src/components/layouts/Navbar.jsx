import React, { useState } from "react";
import LoginModal from "../features/auth/LoginModal";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex flex-col z-50">
      <div className="flex px-4 md:px-10 py-2 items-center justify-between">
        <a href="/" className="text-xl font-bold">
          Toko Paketan
        </a>
        <div className="hidden md:flex gap-4 items-center">
          <a href="">Telkomsel</a>
          <a href="">Indosat</a>
          <a href="">XL</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LoginModal />
          </div>

          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon-lg"
            className="md:hidden "
          >
            <Menu />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden  flex flex-col px-4 py-4 gap-4">
          <div className="flex flex-col items-center gap-4">
            <a href="#" className="block hover:text-blue-600">
              Telkomsel
            </a>
            <a href="#" className="block hover:text-blue-600">
              Indosat
            </a>
            <a href="#" className="block hover:text-blue-600">
              XL
            </a>
          </div>
          <LoginModal />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
