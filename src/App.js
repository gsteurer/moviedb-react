import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="#home">MovieDB</Navbar.Brand>

              <Navbar id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                </Nav>
              </Navbar>
            </Navbar>
            <br />
            <Switch>
              <Route exact path="/">
                <MovieList />
              </Route>
              <Route exact path="/search">
                <MovieSearch />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
