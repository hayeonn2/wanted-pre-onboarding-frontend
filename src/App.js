import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NavBar from "./components/NavBar";
import ToDoList from "./pages/ToDoList";
import NotFound from "./pages/NotFound";
//import "./index.css";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
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
            element={!token ? <Navigate to="/signin" /> : <ToDoList />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
