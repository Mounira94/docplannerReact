import React, { Component } from 'react';
class DestinationCards extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="destination-cards">
                <div className="destination-card">
                    <img className="destination-img" src="https://www.docplanner.com/images/warsaw.png" />
                    <div className="destination-designation">
                        <h4 className="destination-name">Warsaw</h4>
                        <a href="https://www.docplanner.com/career?&loc=poland#jobs-offers" className="destination-btn">see openings</a>
                    </div>
                </div>
                <div className="destination-card">
                    <img className="destination-img" src="https://www.docplanner.com/images/barcelona.png" />
                    <div className="destination-designation">
                        <h4 className="destination-name">Barcelona</h4>
                        <a href="https://www.docplanner.com/career?&loc=poland#jobs-offers" className="destination-btn">see openings </a>
                    </div>
                </div>
                <div className="destination-card">
                    <img className="destination-img" src="https://www.docplanner.com/images/istanbul.png" />
                    <div className="destination-designation">
                        <h4 className="destination-name">Istanbul</h4>
                        <a href="https://www.docplanner.com/career?&loc=poland#jobs-offers" className="destination-btn">see openings </a>
                    </div>
                </div>
                <div className="destination-card">
                    <img className="destination-img" src="https://www.docplanner.com/images/rome.png" />
                    <div className="destination-designation">
                        <h4 className="destination-name">Rome</h4>
                        <a href="https://www.docplanner.com/career?&loc=poland#jobs-offers" className="destination-btn">see openings </a>
                    </div>
                </div>
                <div className="destination-card">
                    <img className="destination-img" src="https://www.docplanner.com/images/mexico-city.png" />
                    <div className="destination-designation">
                        <h4 className="destination-name">Mexico</h4>
                        <a href="https://www.docplanner.com/career?&loc=poland#jobs-offers" className="destination-btn">see openings </a>
                    </div>
                </div>
                <div className="destination-card">
                    <img className="destination-img" src="https://www.docplanner.com/images/curitiba.png" />
                    <div className="destination-designation">
                        <h4 className="destination-name">Curitiba</h4>
                        <a href="https://www.docplanner.com/career?&loc=poland#jobs-offers" className="destination-btn">see openings </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default DestinationCards;