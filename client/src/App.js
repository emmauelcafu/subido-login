import Home from "../src/view/home/home";
import Logins from "../src/view/login/login"
import Registro from "../src/view/registrar/registrar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Logins/>}/>
        <Route path="/registrar" element={<Registro/>} />
      </Routes>
    </Router>
  );
}

export default App;
