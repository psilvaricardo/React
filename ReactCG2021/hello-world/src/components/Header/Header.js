import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    render(){

        return (
            <ul>
                <li><Link to="/">Go to the home page</Link></li>
                <li><Link to={{
                    pathname: '/search'
                }}>Search Page</Link></li>
            </ul>
        );
    }

}

export default Header;
