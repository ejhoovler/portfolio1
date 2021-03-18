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
            <div className='container morpheus-den-gradient'>
        <MDBRow>
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
                            This was a site I built for a small photobooth business
                            they wanted for marketing purposes and generating more business.
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://enchanted.netlify.app' className='px-2 fa-lg hoverable rounded' target='_blank' rel='noreferrer'>
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
                        <MDBCardText className='font-weight-bold cyan-text'>
                            This is my problem child ecommerce project. Just ignore this for now.
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://leeleesunicorns.com' className='px-2 fa-lg hoverable rounded' target='_blank' rel='noreferrer'>
                                View Here!
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
                        <MDBCardText className='font-weight-bold cyan-text'>
                            This is a site I am building with Gulp and Material Design  for a startup t-shirt business
                            they want for marketing and generating more sales.
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://stlthoughtlesscreations.com' className='px-2 fa-lg hoverable' target='_blank' rel='noreferrer'>
                                View Here!
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <MDBRow>
            <MDBCol md='4'>
                <MDBCard wide cascade style={{ width: "22rem" }}>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src={wreaths} alt='project screenshot' waves />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>LeeLees Wreaths & Decor</strong>
                        </MDBCardTitle>
                        <MDBCardText className='font-weight-bold cyan-text'>
                            Photo gallery for my handmade wreath business. All photos are of sold wreaths.
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://leeleeswreaths.netlify.app' className='px-2 fa-lg' role='button'  target='_blank' rel='noreferrer'>
                                View Here!
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
                        <MDBCardText className='cyan-text'>
                            My original portfolio page I built with Gatsby Stellar Template.
                        </MDBCardText>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://firstejhportfolio.netlify.app' className='px-2 fa-lg' role='button'  target='_blank' rel='noreferrer'>
                                View Here!
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
                        <MDBCardText className='cyan-text'>
                            Small marketing business landing page built with...
                        </MDBCardText>
                        <MDBCol className='d-flex justify-content-center'>
                            <a className='px-2 fa-lg' role='button' target='_blank' rel='noreferrer'>
                                ~View Here~
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        </div>
        )
    };
};

export default ProjectCards;