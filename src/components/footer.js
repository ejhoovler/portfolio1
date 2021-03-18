import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'
import '@fortawesome/fontawesome'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer" className='page-footer text-white text-center indigo darken-4 py-4'>
                <div className='container'>
                    <MDBRow>
                        <MDBCol md='6' className='d-flex justify-content-center'>
                            <div className='footer-copyright bg-transparent'>
                                © 2020 Copyright: Elise J Hoovler
                            </div>
                        </MDBCol>
                        <MDBCol md='6' className='d-flex justify-content-end'>
                            <ul className='list-unstyled d-flex mb-0'>
                                <li>
                                    <a className='mr-3' role='button' href='https://linkedin.com/ejhoovler'>
                                        <i className='fab fa-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className='mr-3' role='button' href='https://github.com/ejhoovler'>
                                        <i className='fab fa-github'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className='mr-3' role='button' href='mailto:elisejhoovler@live.com'>
                                        <i className='fab fa-envelope'></i>
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </div>
            </section>
        )
    }
}

export default Footer;