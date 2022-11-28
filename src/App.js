import React, {useState} from "react";
import Home from "./PortfolioContainer/Home/Home";
import Projects from "./PortfolioContainer/Projects/Projects";
import "./App.css";

function App() {
    const [page, setPage] = useState("Home")

    const pageHelper = (event,page) => {
        setPage(page);
        // console.log("hello")
    }

    return (
        <>
            <div className="navbar">
                <button onClick={(e) => pageHelper(e,"Home")}>Home</button>
                <button onClick={(e) => pageHelper(e,"Projects")}>Projects</button>
            </div>

            <div className="App">
                {(page === "Home") && <Home />}
                {(page === "Projects") && <Projects />}
            </div>

        </>

    );
}

export default App;
