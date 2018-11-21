import React, { Component } from 'react';
class AcheivementStat extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="acheivement-stat">
                <div className=" acheivement-stat-cards acheivement-stat-offset">
                    <div className="acheivement-stat-card">
                        <img className="acheivement-stat-img" scr="https://www.docplanner.com/img/flag.png" srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x"
                        />
                        <h2 className="acheivement-stat-title">Leader in 8 countries</h2>
                        <p className="acheivement-stat-txt">Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile</p>
                    </div>
                    <div className="acheivement-stat-card">
                        <img className="acheivement-stat-img" scr="https://www.docplanner.com/img/patients.png" srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"
                        />
                        <h2 className="acheivement-stat-title">20 million unique patients</h2>
                        <p className="acheivement-stat-txt"> visit us every month</p>
                    </div>
                </div>
                <div className="acheivement-stat-cards acheivement-stat-outset">
                    <div className="acheivement-stat-card">
                        <img className="acheivement-stat-img" scr="https://www.docplanner.com/img/visits.png" srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x"
                        />
                        <h2 className="acheivement-stat-title">600 000 appointments</h2>
                        <p className="acheivement-stat-txt">booked last month</p>
                    </div>
                    <div className="acheivement-stat-card">
                        <img className="acheivement-stat-img" scr="https://www.docplanner.com/img/doctors.png" srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"
                        />
                        <h2 className="acheivement-stat-title">35 000 active doctors</h2>
                        <p className="acheivement-stat-txt">trust in our solutions</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default AcheivementStat;