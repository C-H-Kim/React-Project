import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import InputComponent from "./components/InputComponent";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/input" element={<InputComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;