import React from "react";

export class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">ReactApp</a>
                    </div>
                </div>
            </nav>
        );
    };

};
