import React, {useContext} from "react";
import './Home.css'
import {GlobalContext} from "../Globalorage/GlobalContext";
const Home = (props) => {
    const { Name, isAdmin } = useContext(GlobalContext)
    return (
        <div className="msg">
            Thank You for Coming { Name } { isAdmin ? "Admin" : ""}
        </div>
    )
}
export default Home;