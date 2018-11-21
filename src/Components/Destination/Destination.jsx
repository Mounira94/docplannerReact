import React, { Component } from 'react';
import DestinationDescrption from './DestinationDescrption'
import DestinationCards from './DestinationCards'
class Destination extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-healthcare">
            <DestinationDescrption />
            <DestinationCards/>       
            </section>
                );
            }
        }
export default Destination;