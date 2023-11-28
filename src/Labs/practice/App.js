import Asd from "./Asd" 
import Rew from "./Rew"
import React from "react";

import {BrowserRouter, Link, Routes, Route} from "react-router"
function App() {
    return(
    <BrowserRouter>
    <Link to="/qwe/21/14/wer">LINK A</Link> 
    <Routes>
    <Route path="/21/:qwe/:wer/wer" element={<Rew/>}/>
    <Route path="/14/:zxc/:xcv" element={<Asd/>}/>
    </Routes>
    </BrowserRouter>
)
}