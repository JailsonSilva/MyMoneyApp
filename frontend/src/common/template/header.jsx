import React from "react";

export default props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini"><b>MF</b></span>
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b> M</b>inhas <b>F</b>inanças
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
        </nav>
    </header>
)