import React from 'react';
import '../stylesheets/Result.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BobaRate = "/Boba.png";
const BobaPrice = "/Price.png"

class Result extends React.Component {
    render(){
        return <React.Fragment>
            <div className = "container">
                <div className = "card mb-3">
                    <div className = "row no-gutters" className="ShopDetails">
                        <div className="ShopImage">
                            <img src={this.props.data.picture}/>
                        </div>
                        <div className = "col-md-8">
                            <div className = "card-body" className="ShopInfo">
                                <h2 className = "ShopName card-title text-center"> {this.props.data.name} </h2>
                                <div className = "card-text">
                                    <div className = "container">
                                        <div className = "row" className="ShopRating_ShopPrice">
                                            <span className="BobaRates">
                                                { this.props.data.rating ? [...Array(Math.round(this.props.data.rating))].map((e, i) => <img src={BobaRate} className="BobaRate" key={i}></img>) : ""}
                                            </span>
                                            <span className="BobaPrices">
                                                {this.props.data.price ? [...Array(Math.round(this.props.data.price.length))].map((e, i) => <img src={BobaPrice} className="BobaPrice" key={i}></img>) : ""}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className = "container">
                                    <h4 className = "card-text text-center">
                                        <div className = 'Center'>
                                            {this.props.data.phone}
                                        </div>
                                        <div className = 'Center'>
                                            {this.props.data.address}
                                        </div>
                                    </h4>
                                    <h4 className = "card-text text-center">
                                        <div>
                                            {this.props.data.distance} miles
                                        </div>
                                    </h4>
                                </div>
                                <div className = 'container card-bottom'>
                                    <a href={`https://maps.google.com/?q=${this.props.data.name},${this.props.data.address}`} target="_blank">
                                        <button type="button" className="BobaButton btn btn-light btn-block">Take Me There!</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default Result;
