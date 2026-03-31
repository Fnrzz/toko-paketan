import React, { useState } from "react";
import LoginModal from "../features/auth/LoginModal";
import { Button } from "../ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuthStore();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex fixed top-0 w-full bg-white flex-col z-50">
      <div className="flex px-4 md:px-10 py-4 items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Toko Paketan
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link to="/transactions">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="rounded-full px-4 py-2 "
                  >
                    Riwayat Transaksi
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="destructive"
                  onClick={logout}
                  className="rounded-full px-4 py-2"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <LoginModal />
            )}
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
        <div className="md:hidden p-4">
          {isAuthenticated ? (
            <div className="flex flex-col gap-5">
              <Link to="/transactions" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full">
                  Riwayat Transaksi
                </Button>
              </Link>
              <Button
                size="lg"
                variant="destructive"
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="w-full rounded-full"
              >
                Logout
              </Button>
            </div>
          ) : (
            <LoginModal />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
