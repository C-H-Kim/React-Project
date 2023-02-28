import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import InputComponent from "./components/InputComponent";
import ListComponents from "./components/ListComponents";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/input" element={<InputComponent />}></Route>
        <Route path="/list" element={<ListComponents />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;