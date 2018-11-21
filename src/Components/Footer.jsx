import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer className="footer">
                <hr/>
                    <p className="footer-txt"> We are leaders in 8 countries:
                <a className="footer-city" href="https://www.znanylekarz.pl/?_ga=2.205132056.901299071.1539098054-1119852906.1539098054">Poland</a>,
                <a className="footer-city" href="https://www.doktortakvimi.com/?_ga=2.115235983.901299071.1539098054-1119852906.1539098054">Turkey</a>,
                <a className="footer-city" href="https://www.doctoralia.es/">Spain</a>,
                <a className="footer-city" href="https://www.miodottore.it/?_ga=2.108665354.901299071.1539098054-1119852906.1539098054">Italy</a>,
                <a className="footer-city" href="https://www.doctoralia.com.mx/">Mexico</a>,
                <a className="footer-city" href="http://www.doctoralia.com.br/">Brazil</a>,
                <a className="footer-city" href="http://www.doctoraliar.com/">Argentina</a> en
                <a className="footer-city" href="http://www.doctoralia.cl/"> Chile</a>.
            </p>
                    <p class="footer-txt">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions
                for storing or accessing cookies on your browser.<br />
                        www.docplanner.com © 2018
        </p>
        </footer>
                );
            }
        }
export default Footer;