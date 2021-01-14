import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask, MDBRow, MDBCol } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component {
    state = {
        collapseID: ' '
    };

    toggleCollapse = collapseID => () => {
        this.setState(
            prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ' '
        }));
    }
        

        componentDidMount() {
            document.querySelector('nav').style.height = '65px';
        }

        componentWillUnmount() {
            document.querySelector('nav').style.height = 'auto';
        }

    render() {
        const { collapseID } = this.state;
        const navStyle = { marginTop: '4rem' };
        const overlay = (
            <div 
                id='sidenav-overlay' 
                style={{ backgroundColor: 'transparent' }} 
                onClick={() => this.toggleCollapse('navbarCollapse')} 
            />
        );

        return (
            <div id='videobackground'>
                <Router>
                    <div>
                    <MDBNavbar style={navStyle} dark scrolling expand='md' fixed='top'>
                        <MDBContainer>
                        <MDBNavbarBrand>
                            <strong className='white-text'>EJH</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')}/>
                        <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBNavLink to='#'>Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to='#about'>About</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to='#projects'>Projects</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink to='https://linkedin.com/ejhoovler'>
                                        <i className='fab fa-linkedin'></i>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to='https://github.com/ejhoovler'>
                                        <i className='fab fa-github'></i>
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                    {collapseID && overlay}
                    </div>
                </Router>

                <MDBView>
                    <MDBMask className='gradient'>
                        <video className='video-intro' poster='https://mdbootstrap.com/img/Photos/Others/background.jpg' muted loop autoplay>
                            <source src='https://mdbootstrap.com/img/video/animation.mp4' type='video/mp4' />
                        </video>
                    </MDBMask>{' '}

                    <MDBContainer className='d-flex justify-content-center align-items-center px-md-3 px-sm-0' style={{ height: '100vh', width: '100%' }}>
                        <MDBRow>
                            <MDBCol md='12' className='mb-4 white-text text-center'>
                                <h3 className='display-3 font-weight-bold mb-0 pt-md-5'>
                                    Elise Hoovler{' '}
                                </h3>
                                <hr className='hr-light my-4 w-75' />
                                <h4 className='subtext-header mt-2 mb-4'>
                                    ~Freelance Junior Web Developer~
                                </h4>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>

                <MDBContainer className='text-center morpheus-den-gradient text-white'>
                    <MDBRow className='pt-5 pb-4'>
                        <MDBCol md='12'>
                            <p>
                                Welcome to my Portfolio Page!
                                <br />
                I am a self-motivated and detail-oriented, multi-tasking
                individual with strong communication skills <br />and a passion for creativity.
                I've always had a strong desire to be in the tech industry, <br />specifically web
                development and design. About two to three years ago, I began learning through many <br />self-taught courses on HTML, CSS, Bootstrap, JavaScript, React, Node.js and npm, using Github and Gatsbyjs, etc... <br />I am extremely eager to continue studying and currently take on freelance work to expand my experience.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
        </div>
    )
}
}

export default Header;