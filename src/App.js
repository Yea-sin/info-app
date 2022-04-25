import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Form from "./Pages/Form/Form";
import Details from "./Pages/Details/Details";
import Login from "./Pages/Shared/Login/Login/Login";
import Register from "./Pages/Shared/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/storedDetails" element={<Details />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/singup" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
