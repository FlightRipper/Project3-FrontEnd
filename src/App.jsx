import Navbar from "../src/components/Navbar/navbar.jsx";
import "./App.css"
import { Outlet } from "react-router-dom";
import Footer from '../src/components/Footer/footer.jsx'
const App = () =>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default App;