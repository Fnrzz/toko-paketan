import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";
import Checkout from "./pages/Checkout";
import AuthProvider from "./components/layouts/AuthProvider";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout/:id"
          element={
            <AuthProvider>
              <Checkout />
            </AuthProvider>
          }
        />
        <Route
          path="/transactions"
          element={
            <AuthProvider>
              <Transactions />
            </AuthProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
