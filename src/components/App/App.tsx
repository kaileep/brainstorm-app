import * as React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';

import './App.scss';
import NavLink from 'reactstrap/lib/NavLink';
import Brainstormer from '../Brainstormer';
import { Home } from '../Home';

class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <>
                        <Navbar dark>
                            <NavbarBrand >
                                <NavLink tag={Link} to="/">
                                    Brainstormer
                                </NavLink>
                            </NavbarBrand>
                            <Nav>
                                <NavLink tag={Link} to="/main">
                                    Start
                                </NavLink>
                            </Nav>
                        </Navbar>
                        <main>
                            <Switch>
                                <Route path="/main" component={Brainstormer} />
                                <Route component={Home} />
                            </Switch>
                        </main>
                    </>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
