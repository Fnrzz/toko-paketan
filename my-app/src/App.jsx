import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";
import Checkout from "./pages/Checkout";
import AuthProvider from "./components/layouts/AuthProvider";

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
      </Routes>
    </div>
  );
}

export default App;
