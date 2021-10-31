import React from 'react';
import "./Header.css"
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const {user,logOut} = useFirebase()
  console.log(user);
    return (
      <Navbar style={{ backgroundColor: "#e3f2fd" }} expand="lg">
        <Container>
          <Navbar.Brand className="text-black" href="#home">
            <h4 className="text-secondary">
              Love<span className="text-danger">&</span>Tour
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto navlink">
              <NavLink className="text-black" to="/home">
                <h5 className="text-secondary">Home</h5>
              </NavLink>
              <NavLink className="text-black" to="/about">
                <h5 className="text-secondary">About</h5>
              </NavLink>
              <NavLink className="text-black" to="/manageAllPlaces">
                <h5 className="text-secondary">Manage Places</h5>
              </NavLink>
              <NavLink className="text-black" to="/addPlace">
                <h5 className="text-secondary">Add Place</h5>
              </NavLink>

              {!user?.email ? (
                <NavLink className="text-black" to="/login">
                  <h5 className="text-secondary">Login</h5>
                </NavLink>
              ) : (
                <Button
                  variant="primary"
                  className="text-white "
                  onClick={logOut}
                >
                  LogOut
                </Button>
              )}
            </Nav>
            <Navbar.Text className="text-black">
              <h5 className="text-secondary">
                Signed in as: {user?.displayName}
              </h5>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;