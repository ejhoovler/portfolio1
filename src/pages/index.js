import React from 'react'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'
import ProjectCards from '../components/card'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

export default () => (
    <Layout className='morpheus-den-gradient'>
        <Container>                        
                <ProjectCards />
        </Container>
    </Layout>
)