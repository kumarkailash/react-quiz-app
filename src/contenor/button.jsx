import React from 'react';
import fblogo from '../images/fblogo.png'
// import fblogo from './../images/facebookicon.jpg'


class LoginButton extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (

            <div className="loginbtn">
                <center>
                    <button className="btn  abx" onClick={()=>this.props.login()}> <img id="fblogo1" src={fblogo} /> Login With Facebook</button>
                </center>
               
            </div>



        )
    }
}
export default LoginButton;