import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className="header">
                <div className="header-brand">
                    <div className="brand">
                        <img className="logo" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="docplanner logo" />
                    </div>
                    <nav className="nav-bar">
                        <ul className="nav-menu">
                            <li className="nav-items ">
                                <a className="nav-link nav-link-active " href="#"> About us</a>
                            </li>
                            <li className="nav-items">
                                <a className="nav-link" href="#">Carrer</a>
                            </li>
                            <li className="nav-items">
                                <a className="nav-link" href="#">Departement</a>
                                <ul className="departement-items">
                                    <li className="departement-item">
                                        <a className="departement-item-link" href="https://www.docplanner.com/department?dep=marketing">Marqueting & PR</a>
                                    </li>
                                    <li className="departement-item">
                                        <a className="departement-item-link" href="https://www.docplanner.com/department?dep=marketing">Customer Success & Sales</a>
                                    </li>
                                    <li className="departement-item">
                                        <a className="departement-item-link" href="https://www.docplanner.com/department?dep=marketing">IT, Product, Design & UX</a>
                                    </li>
                                    <li className="departement-item">
                                        <a className="departement-item-link" href="https://www.docplanner.com/department?dep=marketing">Finance & Administration</a>
                                    </li>
                                    <li className="departement-item">
                                        <a className="departement-item-link" href="https://www.docplanner.com/department?dep=marketing">HR & more</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header ;

