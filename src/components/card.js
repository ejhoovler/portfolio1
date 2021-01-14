import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol, MDBView, MDBCardImage } from 'mdbreact';

class ProjectCards extends React.Component {
    render() {
        return (
            <div className='container morpheus-den-gradient'>
        <MDBRow>
            <MDBCol md='4'>
                <MDBCard wide cascade>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src='' alt='project screenshot' />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>Enchanted STL</strong>
                        </MDBCardTitle>
                        < p className='font-weight-medium blue-text'>
                            This was a site I built for a small photobooth business
                            they wanted for marketing purposes and generating more business.
                        </p>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://enchanted.netlify.app' className='px-2 fa-lg hoverable rounded'>
                                View Here!
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard narrow>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src='images/mirror.png' alt='project screenshot' />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>LeeLeeS UniCornS</strong>
                        </MDBCardTitle>
                        < p className='font-weight-bold blue-text'>
                            This is my problem child ecommerce project. Just ignore this for now.
                        </p>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://leeleesunicorns.com' className='px-2 fa-lg hoverable rounded'>
                                View Here!
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard wide cascade>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src='../images/stltc.png' alt='project screenshot' />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>STL Thoughtless Creations</strong>
                        </MDBCardTitle>
                        < p className='font-weight-bold blue-text'>
                            This is a site I am building for a startup t-shirt business
                            they want for marketing and generating more sales.
                        </p>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://stlthoughtlesscreations.com' className='px-2 fa-lg hoverable'>
                                View Here!
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <MDBRow>
            <MDBCol md='4'>
                <MDBCard wide cascade>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src='../images/wreaths.png' alt='project screenshot' />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>LeeLees Wreaths & Decor</strong>
                        </MDBCardTitle>
                        < p className='font-weight-bold blue-text'>
                            Photo gallery for a small wreath business I started and almost all of the wreaths I have made and sold.
                        </p>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://leeleeswreaths.netlify.app' className='px-2 fa-lg' role='button'>
                                View Live
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard wide cascade>
                    <MDBView cascade>
                        <MDBCardImage hover overlay='white-slight' className='card-img-top' src='./src/images/first.png' alt='project screenshot' />
                    </MDBView>

                    <MDBCardBody cascade className='elegant-color white-text rounded-bottom text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>Another Portfolio</strong>
                        </MDBCardTitle>
                        < p className='font-weight-bold blue-text'>
                            My original portfolio page I built with Gatsby Stellar Template.
                        </p>
                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='https://firstejhportfolio.netlify.app' className='px-2 fa-lg' role='button'>
                                View Live
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