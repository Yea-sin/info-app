import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Form from "./Pages/Form/Form";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/storedDetails" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
