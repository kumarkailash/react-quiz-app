





import React from 'react';


class Detail extends React.Component {
    constructor() {
        super()

    }



    render() {

        console.log(1111,this.props)
        let lenghtOfquestion = this.props.result.lenghtOfquestion;
        let correctAnswer = this.props.result.marks;
        // let wrongAns = this.props.result.uncorrect;
        let percentage = correctAnswer / lenghtOfquestion
        percentage = percentage * 100;

        let greeting;
        let color;
        if (percentage < 50) {
            greeting = "Sorry you are failed you got " + "  " + percentage;
            color = "red";
        }
        else {
            greeting = "Congratulation you got " + "  " + percentage;
            color = "green"
        }
        return (

            <div className="result">


                <div className="row" style={{ marginTop: '2%' }}>
                    <div className="col 16 push-l3 s12 card-panel resultBox">
                        <p style={{ color: color }} className="resResult">{greeting + "%"}</p>

                        <p className="-text" style={{ textAlign: "center" }}>Total Questions : {lenghtOfquestion}</p>
                        <p className="-text" style={{ textAlign: "center", color: 'green' }}>Correct Answer :{correctAnswer}</p>
                        {/* <p className="-text" style={{ textAlign: "center", color: 'red' }}>Wrong Answer: {wrongAns}</p> */}


                        <span className="waves-effect retake  btn" style={{ marginBottom: "10px" }} >Retake Quiz</span>
                        <br />
                        <br />
                        <span className="waves-effect retake  btn" style={{ marginBottom: "10px" }} onClick={() => this.props.logout()}>Logout</span>


                    </div>
                </div>

            </div>

        )
    }
}
export default Detail;