import React, { Component } from 'react';
class HealthcareMain extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="main" className="healthcare-main">
                <div className="health-grid  ">
                    <div className="health-description">
                        <p className="descriptoion-text">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient
                            journey should be enjoyable, and that's why we are always next to them: to help them find the
                            best possible care. Anytime, anywhere.</p>
                    </div>
                    <div className="health-card card-patient">
                        <div className="health-card-title ">
                            <p className="card-txt">for patients </p>
                                <h1 className="card-description">Find a doctor, book a visit and solve any health-related doubt</h1>
                        </div>
                            <div className="card-img-container">
                                <div className="patient-country">
                                    <select className="patient-country-options">
                                        <option className="patient-country-option">Choose country</option>
                                        <option className="patient-country-option">Tunis</option>
                                        <option className="patient-country-option">Korea</option>
                                        <option className="patient-country-option">Tailand</option>
                                    </select>
                                </div>
                                <div className="card-img-div">
                                    <img className="card-img" src="https://www.docplanner.com/img/screen-marketplace@2x.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="health-grid">
                        <div className="health-description">
                            <p className="descriptoion-text">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient
                                journey should be enjoyable, and that's why we are always next to them: to help them find the
                            best possible care. Anytime, anywhere.</p>
                        </div>
                        <div className="health-card card-doctor">
                            <div className="health-card-title ">
                                <p className="card-txt">for doctors</p>
                                    <h1 className="card-description">Find a doctor, book a visit and solve any health-related doubt</h1>
                        </div>
                                <div className="card-img-container card-img-container-decale">
                                    <div className="card-img-div">
                                        <img className="card-img" src="https://www.docplanner.com/img/screen-saas@2x.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                }
            }
export default HealthcareMain;