import React, { Component } from 'react';
class HealthcareCampany extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="healthcare-campany">
                <div className="healthcare-campany-text">
                    <h3 className="healthcare-campany-text">We are a global company with local culture</h3>
                </div>
                <div className="healthcare-campany-name">
                    <ul className="healthcare-campany-list">
                        <li className="healthcare-campany-item">
                            <img className="icon" src="https://www.docplanner.com/img/sygnet.png" width="10px" height="10px" />
                            <a className="healthcare-campany-link" href="https://www.znanylekarz.pl/?_ga=2.71882139.901299071.1539098054-1119852906.1539098054">
                                Znanylekarz</a>
                        </li>
                        <li className="healthcare-campany-item">
                            <img className="icon" src="https://www.docplanner.com/img/sygnet.png" width="10px" height="10px" />
                            <a className="healthcare-campany-link" href="https://www.znamylekar.cz/"> Znanylekarz</a>
                        </li>
                    </ul>
                    <ul className="healthcare-campany-list">
                        <li className="healthcare-campany-item">
                            <img className="icon" src="https://www.docplanner.com/img/sygnet.png" width="10px" height="10px" />
                            <a className="healthcare-campany-link" href="https://www.doctoralia.es/"> Doctoralia</a>
                        </li>
                    </ul>
                    <ul className="healthcare-campany-list">
                        <li className="healthcare-campany-item">
                            <img className="icon" src="https://www.docplanner.com/img/sygnet.png" width="10px" height="10px" />
                            <a className="healthcare-campany-link" href="https://www.doktortakvimi.com/?_ga=2.184038702.901299071.1539098054-1119852906.1539098054">
                                Doktortakvimi</a>
                        </li>
                    </ul>
                    <ul className="healthcare-campany-list">
                        <li className="healthcare-campany-item">
                            <img className="icon" src="https://www.docplanner.com/img/sygnet.png" width="10px" height="10px" />
                            <a className="healthcare-campany-link" href="https://www.doktortakvimi.com/?_ga=2.184038702.901299071.1539098054-1119852906.1539098054">
                                Doktortakvimi</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default HealthcareCampany;