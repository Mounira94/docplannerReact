import React, { Component } from 'react';
import Title from './Title'
import HealthcareMain from './HealthcareMain'
import HealthcareCampany from './HealthcareCampany'
class Healthcare extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-healthcare">
            <Title />
            <HealthcareMain/>
            <HealthcareCampany/>
            </section>
                );
            }
        }
export default Healthcare;