import React from "react";
import './header.css';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link d-flex align-items-center" href="/dashboard">Dashboard</a>
                <a className="nav-item nav-link d-flex align-items-center" href="/relatorio">Relatório</a>
                <img className="logo" alt="logo" src="https://img.icons8.com/cotton/2x/stopwatch.png"/>
                <a className="nav-item nav-link d-flex align-items-center" href="/">Lançamento</a>
                <a className="nav-item nav-link d-flex align-items-center" href="/">Contato</a>
            </div>
        </div>
    </nav>
);

export default Header;