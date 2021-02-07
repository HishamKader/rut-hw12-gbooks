import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap'
import { FaBook } from 'react-icons/fa'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand className="brand" href="#home">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            <FaBook className="blue" /> 
            <span className="red"> Google </span> 
            <span className="yellow">Book </span>
            <span className="green">Search </span>
            </Link>
            </Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link>
            <Link
              to="/saved"
              className={
                window.location.pathname === "/Saved" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved Books
            </Link>
            </Nav.Link>
            </Nav>
        </Navbar>
        </div>
    )
}
