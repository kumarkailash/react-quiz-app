





import React from 'react';
// import Questions from './questions'
import Nevbar from './nevbar';
// import Nevbar from '../contenor/nevbar'



class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            start: false
        }
    }


    click = () => {
        this.setState({
            start: true
        })
    }
    render() {
        return (

            <div>
                <Nevbar name={this.props.name} img={this.props.img} />
                {/* <h1 className="btn-large">   Welcomoe to Quiz App  </h1> */}

                {/* <Nevbar   name={this.state.userName} img={this.state.userImg} /> */}

                <div >
                    <div className="col s12 m5">
                        <center>
                            <div className="card-panel teal">
                                <span className="white-text">  <h3> Descrption:</h3>
                                    {/* <p>
                                    Basic React quiz covering All chapters of a Smarter way to Learn React book. Important Note: Where specifically noted, you can select more than one option as a correct answer. For example, you can select a, b, and c as the correct answer.
        </p> */}


                                    <p>Total Questions:  <h5> 10 </h5></p>

                                    <p>Passing Score:  <h5> 60 </h5></p>
                                    <p>Duration:  <h5> 10 Mint</h5></p>
                                    <p>No Of Attamp Of:  <h5>0</h5></p>

                                    <a className="waves-effect waves-light btn-small" onClick={() => this.props.click()} >Start Quiz</a>

                                </span>

                            </div> </center>
                    </div>
                </div>



            </div>

        )
    }
}
export default Home;