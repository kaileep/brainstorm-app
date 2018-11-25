import * as React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';

import './App.scss';
import Brainstormer from '../Brainstormer';

class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <>
                        <Navbar color="dark" dark>
                            <NavbarBrand tag={Link} to="/">
                                Brainstormer
                            </NavbarBrand>
                            {/* <Nav>
                                <NavItem>
                                    <NavLink tag={Link} to="/main">
                                        Start
                                    </NavLink>
                                </NavItem>
                            </Nav> */}
                        </Navbar>
                        <main>
                            <Switch>
                                <Route component={Brainstormer} />
                            </Switch>
                        </main>
                    </>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
