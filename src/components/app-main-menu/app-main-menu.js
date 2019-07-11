import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { routesMap } from '~/routes';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Cart from '~c/cart';

@observer class AppMainMenu extends Component {
    render() {
        const appMainMenuButtons = [
            { route: routesMap.home, label: 'Home' },
            { route: routesMap.order, label: 'Order' }
        ].map((item, i) => {
            return (<NavLink key={i} className="nav-link" activeClassName="active" role="button" href="#" to={item.route} exact>{item.label}</NavLink>);
        });
        return (
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Navbar.Brand>First React App</Navbar.Brand>
                <Nav className="mr-auto">
                    {appMainMenuButtons}
                </Nav>
                <Cart />
            </Navbar>
        );
    }
}

export default AppMainMenu;