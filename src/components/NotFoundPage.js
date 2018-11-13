import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                404 - <NavLink to="/">Go home</NavLink>
            </div>
        )
    }
}

export default NotFoundPage;