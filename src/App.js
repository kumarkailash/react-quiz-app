import React from 'react';
import './App.css';

import Nevbar from './contenor/nevbar'

import Home from './contenor/Home'
import Questions from './contenor/questions'
import { Timer, facebookLogin, Logout } from './config/fuction'
// import Detail from './contenor/detail'
import LoginButton from './contenor/button';
import bg from './images/quizbg1.jpg'
import { async } from 'q';
// import AppBar1 from "./contenor/Appbar"
import BasicExample from './config/router'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // userName :
      login: true,
      start: true,
      result: true
    }
  }



  login = async () => {
    let user = await facebookLogin()
    console.log(user)
    this.setState({
      login: false,
      userName: user.name,
      userImg: user.img
    })
    // this.logout = this.logout.bind(this)
  }




  timerShow = (res) => {


    setInterval(async () => {
      try {
        let time = await Timer();
        // console.log(time)
        if (time === '0:00') {
          this.setState({
            result: false,
          })
          clearInterval()
        }
        else {
          this.setState({
            Time: time,
            start: false
          })
        }

      }
      catch (error) {
        console.log(error)
      }
    }, 1000)

  }

  logout = () => {
    // alert("Hi",val)
     Logout()
   this.setState({
    login: true,
    start: true,
    result: true,
    counter:0,
    userName: '',
    userImg: ''
     })
  }


  render() {
    return (
      <div>


        {
          this.state.login ?
            <div>


              <Nevbar loginbtn={<LoginButton login={this.login} />} name={this.state.userName} img={this.state.userImg} />
              <img id="backgroundimg" src={bg} />

            </div>
            :
            <div>

              {this.state.start ?
                <Home name={this.state.userName} img={this.state.userImg} click={this.timerShow} /> :
                <div>
                  {this.state.result ?

                    <div>
                      <Questions  logout={this.logout} name={this.state.userName} img={this.state.userImg} time={this.state.Time} />

                    </div> :
                    alert()
                    // <Detail />

                  }




                </div>}

            </div>}
        <div>

        </div> 

        

      </div>


    )

  }
}

export default App;