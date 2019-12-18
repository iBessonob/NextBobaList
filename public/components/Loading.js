import React from 'react';
import '../stylesheets/Loading.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const bobaImage = "/BobaLoad.png"

class Loading extends React.Component {

    render (){
        return(
            <div className = "BobaContainer">
                <img src={bobaImage}></img>
            </div>)
    }
}

export default Loading;
