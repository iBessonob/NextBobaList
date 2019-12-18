import React from 'react';
import '../public/stylesheets/index.css';
import Loading from '../public/components/Loading.js';
import Result from '../public/components/Result.js';
import 'bootstrap/dist/css/bootstrap.min.css';
const fetch = require('node-fetch');
import Head from 'next/head'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, data: {}};
    }

    onBobaFindClick = () => {
        this.setState({
            loading: true,
            data: {}
        });

        let oldThis = this;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(`/api/findBoba?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`, {
                    method: 'get' // *GET, POST, PUT, DELETE, etc.
                }).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    console.log(data);
                    console.log(data.boba_shop_data);
                    oldThis.setState({
                        loading: false,
                        data: data.boba_shop_data
                    });
                })
            });
        }
    }


    render(){
        return <React.Fragment>
        <Head>
            <title>My Boba List</title>
        </Head>
        <div className = "container">
            <header className="jumbotron">
                <h1 className="display-4">Welcome, BobaAddicts!!</h1>
                <p className="lead">Can't decide on a boba place? Click Below!!</p>
                <div className="BobaFindDiv">
                    <button type="button" className="BobaButton btn btn-light btn-lg" onClick={this.onBobaFindClick}>
                        Find Me Boba!
                    </button>
                </div>
            </header>
        </div>
        <div className="Content">
            {
                this.state.loading && <Loading></Loading>
            }
            {
                !this.state.loading && <Result data = {this.state.data}></Result>
            }
        </div>
        </React.Fragment>
    }
}

export default App;
