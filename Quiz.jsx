import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputData from "./Question.json";
import Round1 from './Round1';
import Round2 from './Round2';
import Round3 from './Round3';
import Round4 from './Round4';
import Round5 from './Round5';
import Chart from './Chart';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class Quiz extends React.Component {
  constructor(props){
    this.state = {
      counter: 60,
      start: false,
      value: 0,
      questionData: InputData.data,
      team1: 0,
      team2: 0,
      team3: 0,
      timerCount: 0,
      round: 1,
    }
  }

  startCounter = event =>{
    this.setState({ counter: 60, start : true, timerCount : this.state.timerCount+1, value : this.state.timerCount+1 < 4 || this.state.timerCount+1 > 15 ? this.state.value : (this.state.timerCount)%3 === 0 ? this.state.value+1 : this.state.value })
    this.timerId = setInterval(() => {
      this.setState({ counter: this.state.counter-1 }); 
    }, 1000)
    this.timeoutId = setTimeout(() => { clearInterval(this.timerId); this.incrementQuestion() }, 60*1000);
  }

  incrementQuestion = event => {
      if(this.state.timerCount < 15){
        this.startCounter()
      }
  }

  handleChange = (event, newValue) => {
    this.setState({ value : newValue});
  }

  handleNext = event =>{
    this.setState({ round : this.state.round + 1});
  }

  handleSubmit = (teamScore , value, teamName, round, selAns) =>{
    clearTimeout(this.timeoutId);
    clearInterval(this.timerId);
    var queData = [...this.state.questionData];
    queData.map(val =>{
      if(val.TeamName === teamName && val.Round === round){
        val.SelectedAnswer = selAns
      }
    })
    this.setState({ [teamScore]: this.state[teamScore] + (Math.ceil(this.state.counter/12)*value) , questionData: queData }, () => {this.startCounter()})
  }

  render(){
    const {value} = this.state
    return(
      <div style={{fontFamily: "Verdana"}}>
      <div style={{textAlign:"center", padding: "2%", fontSize: "20px"}}>Welcome to Technical Thursday</div>
      {this.state.start && this.state.timerCount <16 ? 
        (
        <div>
        <div style ={this.state.counter <10 ? {direction : "rtl", color : "red", fontSize: "15px"} :{direction : "rtl",  fontSize: "15px"}}> Countdown: {this.state.counter} </div>
        <AppBar position="static">
        <Tabs value={value} onChange={this.handleChange} variant="scrollable"  scrollButtons="on" >
          <Tab label="Round One" />
          <Tab label="Round Two" />
          <Tab label="Round Three" />
          <Tab label="Round Four" />
          <Tab label="Round Five" />
        </Tabs>
      </AppBar>
      {value === 0 ?
          <Round1 question={this.state.questionData} handleSubmit={this.handleSubmit} timerCount={this.state.timerCount}/>
         : null
      }
      {value === 1 ?
          <Round2  question={this.state.questionData} handleSubmit={this.handleSubmit} timerCount={this.state.timerCount}/>
         : null
      }
      {value === 2 ?
          <Round3  question={this.state.questionData} handleSubmit={this.handleSubmit} timerCount={this.state.timerCount}/>
         : null
      }
      {value === 3 ?
          <Round4  question={this.state.questionData} handleSubmit={this.handleSubmit} timerCount={this.state.timerCount}/>
         : null
      }
      {value === 4 ?
          <Round5  question={this.state.questionData} handleSubmit={this.handleSubmit} timerCount={this.state.timerCount}/>
         : null
      }
      </div>
        ) :(
          this.state.timerCount ===0 && 
          <div style={{ textAlign: "center"}} >
            <Button variant="contained" color="primary" onClick = {this.startCounter} style={{fontFamily: "Verdana"}}> start Quiz</Button>
          </div>
        ) }
        {this.state.timerCount > 15 &&
          <div style={{textAlign : "center"}}>

            <span>
            {this.state.questionData.map(val =>{
              if(val.TeamName === 1 && val.Round === this.state.round){
                return(
                  <Paper>
                    <Typography>Team: {val.TeamName}</Typography>
                    <Typography style ={{ whiteSpace:"pre-wrap", color: "black"}}>Question: {val.Question}</Typography>
                    <Typography>Correct Answer: {val.CorrectAnswer}</Typography>
                    <Typography style={val.CorrectAnswer === val.SelectedAnswer?{color:"green"}:{color:"red"}}>Selected Answer: {val.SelectedAnswer}</Typography>
                  </Paper>
                )
              }
              if(val.TeamName === 2 && val.Round === this.state.round){
                return(
                  <Paper style={{marginTop: "2%"}}>
                    <Typography>Team: {val.TeamName}</Typography>
                    <Typography style ={{ whiteSpace:"pre-wrap", color: "black"}}>Question: {val.Question}</Typography>
                    <Typography>Correct Answer: {val.CorrectAnswer}</Typography>
                    <Typography style={val.CorrectAnswer === val.SelectedAnswer?{color:"green"}:{color:"red"}}>Selected Answer: {val.SelectedAnswer}</Typography>
                  </Paper> 
                )
              }
              if(val.TeamName === 3 && val.Round === this.state.round){
                return(
                  <Paper style={{marginTop: "2%"}}>
                    <Typography>Team: {val.TeamName}</Typography>
                    <Typography style ={{ whiteSpace:"pre-wrap", color: "black"}}>Question: {val.Question}</Typography>
                    <Typography>Correct Answer: {val.CorrectAnswer}</Typography>
                    <Typography style={val.CorrectAnswer === val.SelectedAnswer?{color:"green"}:{color:"red"}}>Selected Answer: {val.SelectedAnswer}</Typography>
                  </Paper>
                )
              }
            })}
            {this.state.round <6 ?
              <Button variant="contained" color="primary" onClick = {this.handleNext} style={{marginTop: "2%"}}> Next</Button> :
              <span>
                <Typography>Team 1 Score : {this.state.team1}</Typography>
                <Typography>Team 2 Score : {this.state.team2}</Typography>
                <Typography>Team 3 Score : {this.state.team3}</Typography>
                <Chart  />
              </span>}
            </span>
          </div>
        }
      </div>
    )
  }   
}
export default Quiz;