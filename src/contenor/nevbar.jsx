import React from 'react';
// import Button from './button'
import { facebookLogin } from '../config/fuction'
import fblogooo from '../images/quizlogo.png'



class Nevbar extends React.Component {
  constructor(props) {
    super(props)

  }

  login = async () => {
    try {
      let user = await facebookLogin()
      console.log('working==>', user)
      this.props.getRes(true)
    }
    catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div>
        <nav>
          <div className="white-text">
            <img id="quizlogo" src={fblogooo}/>
            <a href="#!" className="logo" >Welcome to Quiz App </a>
            <ul className="right">
 <h5>
       <li > {this.props.name}   
              <img id="fbpic" src={this.props.img}  />
              </li>
               </h5> 
              <li>
              {this.props.loginbtn}
              </li>
            </ul>
          </div>
        </nav>


     
               
      </div>




    )
  }
}
export default Nevbar;