import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component
{
    render(){
        var extra={
            id: "xyz",
            hobbies:["Reading","Writing"]
        };
        return(
            <div>
                <Header/>
                <div className="container">
                    <Home name={"react"} age={25} extra={extra}>
                        <h1>child 1 of home</h1>
                        <p>child 2 of home</p>

                    </Home>
                </div>

            </div>
        );
    }

};

render(<App/>,window.document.getElementById("app"));

