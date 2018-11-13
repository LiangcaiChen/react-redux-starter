import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class StylePlayground extends Component {
    render() {
        return (
            <div>
                <p>===========Playground Container============</p>

                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">This is the <span>1st</span> page header</h1>

                        <div className="page-header__actions">
                            <Link to="/" className="button" >Add things</Link>
                        </div>

                    </div>
                </div>

                <div className="content-container">
                    <form className="form">
                        <p className="form__error">Here holds error msg</p>
                        <input className="text-input" type="text" placeholder="Text input"/>
                        <input className="text-input"/>
                        <input className="text-input"/>
                        <textarea className="textarea"></textarea>
                        <div>
                            <button className="button">Submit</button>
                        </div>
                    </form>
                </div>



                <p>=========================================</p>
            </div>
        )
    }
}