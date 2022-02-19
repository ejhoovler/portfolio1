import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol, MDBView, MDBCardImage, MDBCardText } from 'mdbreact';

import first from '../images/first.png'
import mirror from '../images/mirror.png'
import stltc from '../images/stltc.png'
import wreaths from '../images/wreaths.png'
import one from '../images/one.png'

class ProjectCards extends React.Component {
    render() {
        return (
            <div className='container-fluid morpheus-den-gradient'>
        <MDBRow className='d-flex align-items-center'>
            <MDBCol md='4'>
                <MDBCard wide cascade style={{ width: "22rem" }}>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src={mirror} alt='project screenshot' waves />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>Enchanted STL</strong>
                        </MDBCardTitle>
                        <MDBCardText className='font-weight-medium cyan-text'>
                            Website built for local photobooth business with Gatsby.js and React.
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://enchanted.netlify.app' className='px-2 fa-lg hoverable rounded link-info' target='_blank' rel='noreferrer'>
                                ~View Here~
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard wide cascade style={{ width: "22rem" }}>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src={one} alt='project screenshot' waves />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>LeeLeeS UniCornS</strong>
                        </MDBCardTitle>
                        <MDBCardText className='font-weight-medium cyan-text'>
                            This is a demo ecommerce site built with Gatsby.js, Stripe and React. Currently work/update in progress.
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://leeleesunicorns.com' className='px-2 fa-lg hoverable rounded  link-info' target='_blank' rel='noreferrer'>
                                ~View Here~
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard wide cascade style={{ width: "22rem" }}>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src={stltc} alt='project screenshot' waves />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>STL Thoughtless Creations</strong>
                        </MDBCardTitle>
                        <MDBCardText className='font-weight-medium cyan-text'>
                            This is a site I was building with Gulp and Material Design  for a startup t-shirt business.
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://stlthoughtlesscreations.com' className='px-2 fa-lg hoverable rounded  link-info' target='_blank' rel='noreferrer'>
                                ~View Here~
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
            <br />
        <MDBRow className='d-flex align-items-center'>
            <MDBCol md='4'>
                <MDBCard wide cascade style={{ width: "22rem" }}>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src={wreaths} alt='project screenshot' waves />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>LeeLees Wreaths & Decor</strong>
                        </MDBCardTitle>
                        <MDBCardText className='font-weight-medium cyan-text'>
                            Photo gallery for my handmade wreath business. All photos are of sold wreaths. Built with Gatsby.js and React.
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://leeleeswreaths.com/' className='px-2 fa-lg hoverable rounded  link-info' role='button'  target='_blank' rel='noreferrer'>
                                ~View Here~
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard wide cascade style={{ width: "22rem" }}>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src={first} alt='project screenshot' waves />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>Another Portfolio</strong>
                        </MDBCardTitle>
                        <MDBCardText className='font-weight-medium cyan-text'>
                            My original portfolio page I built with Gatsby Stellar Template.
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://firstejhportfolio.netlify.app' className='px-2 fa-lg hoverable rounded  link-info' role='button'  target='_blank' rel='noreferrer'>
                                ~View Here~
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard wide cascade style={{ width: "22rem" }}>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src={mirror} alt='screenshot' waves />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>
                                Vivid Media Concepts, LLC
                            </strong>
                        </MDBCardTitle>
                        <MDBCardText className='font-weight-medium cyan-text'>
                            Small marketing business landing page built with...
                        </MDBCardText>
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        </div>
        )
    };
};

export default ProjectCards;