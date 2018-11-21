import React, { Component } from 'react';
class Title extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className="healthcare-title">
                <img className="healthcare-logo" src="https://www.docplanner.com/img/sygnet.png" alt="logo"/>
                <h1 className="healthcare-txt">Making the healthcare experience more human</h1>
        </div>
                );
            }
        }
export default Title;