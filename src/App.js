import logo from "./logo.svg";
import Labs from "./Labs";

// import './App.css';
import Kanbas from "./Kanbas";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const screen = "Labs";
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/"         element={<Navigate to="/Kanbas"/>}/>
        </Routes>
        {/* {screen === "Hello" && <HelloWorld />}
        {screen === "Labs" && <Labs />}
        {screen === "Kanbas" && <Kanbas />} */}
      </div>
    </HashRouter>
  );
}

export default App;