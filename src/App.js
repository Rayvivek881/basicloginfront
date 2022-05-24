import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Componenets/Home/Home";
import PrimarySearchAppBar from "./Componenets/Appbar/Appbar";
import SignIn from "./Componenets/Login/SignIn";
import SignUp from "./Componenets/Signup/SignUp";
import { GlobalProvider } from "./Componenets/Globalorage/GlobalContext";
function App() {
  return (
    <div className="App">
        <GlobalProvider>
            <Router>
                <PrimarySearchAppBar />
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/SignIn" element = {<SignIn />} />
                    <Route path="/SignUp" element = {<SignUp />} />
                </Routes>
            </Router>
        </GlobalProvider>
    </div>
  );
}
export default App;
