import React, { Component } from 'react';
import AcheivementPlatform from './AcheivementPlatform'
import AcheivementStat from './AcheivementStat'
class Acheivement extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-acheivement">
                <AcheivementPlatform />
                <AcheivementStat />
            </section>
        );
    }
}
export default Acheivement;