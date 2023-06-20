import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NavBar from "./components/NavBar";
import ToDo from "./pages/ToDo";
import NotFound from "./pages/NotFound";
//import "./index.css";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={token ? <Navigate to="/todo" /> : <SignIn />}
          />
          <Route
            path="/signup"
            element={token ? <Navigate to="/todo" /> : <SignUp />}
          />
          <Route
            path="/signin"
            element={token ? <Navigate to="/todo" /> : <SignIn />}
          />
          <Route
            path="/todo"
            element={!token ? <Navigate to="/signin" /> : <ToDo />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
