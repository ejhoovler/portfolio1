import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ProjectCards from '../components/card'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stickyNav: false,
        }
    }

    render() {
        return (
            <Layout>
                <Helmet title="Elise Hoovler" />
                <div id='main'>
                    <section className="container-fluid">

                    </section>
                    <br />
                    <section className="container-fluid">
                            <ProjectCards />
                    </section>
                </div>
            </Layout>
        )
    }
}

export default Index;