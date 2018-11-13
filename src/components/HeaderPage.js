import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class HeaderPage extends Component {
    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <Link className="header__title" to="/">
                        <h1>Web-title</h1>
                    </Link>
                </div>
            </header>
        )
    }
}

export default HeaderPage;