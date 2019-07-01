import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Round4 extends React.Component {
  constructor(props){
    this.state = {
      team1: "",
      team2: "",
      team3: ""
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  handleChange =(event) => {
    this.setState({[event.target.name] : event.target.value});
  }
  
  handleSubmit = (team, crtAns) =>{
    var teamName = team === "team1" ? 1 : team === "team2" ? 2 : 3 
    if(this.state[team] === crtAns){
      this.props.handleSubmit(team, 5, teamName, 4, this.state[team]);
    }else{
      this.props.handleSubmit(team, 0, teamName, 4, this.state[team]);   
    }
  }

  render(){
    const { team1, team2, team3 } = this.state
    return(
      <div style={{marginLeft: "1%"}}>
        {this.props.question.map((val,index) => {
          if(val.Round === 4 && val.TeamName === 1 && this.props.timerCount===10){
            return (
              <div key ={index}>
              <Typography style={{textAlign : "center", fontSize: "20px"}}> Team {val.TeamName} </Typography>
              <FormControl component="fieldset" disabled ={this.props.timerCount !== 10}>
                <FormLabel component="legend" style ={{ whiteSpace:"pre-wrap", color: "black"}}>{val.Question} </FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="team1"
                  value={team1}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value={val.Option1} control={<Radio />} label={val.Option1} />
                  <FormControlLabel value={val.Option2} control={<Radio />} label={val.Option2} />
                  <FormControlLabel value={val.Option3} control={<Radio />} label={val.Option3} />
                  <FormControlLabel value={val.Option4} control={<Radio />} label={val.Option4} />
                  <FormControlLabel value={val.Option5} control={<Radio />} label={val.Option5} />
                </RadioGroup>
                <div>
                {this.props.timerCount === 10 &&<Button  variant="contained" color="primary" disabled={this.state.team1 === ""} onClick ={this.handleSubmit.bind(this,"team1",val.CorrectAnswer)}>Submit </Button>}
                </div>
              </FormControl>
              </div>
            )
          }
          if(val.Round === 4 && val.TeamName === 2 && this.props.timerCount===11){
            return (
              <div key ={index}>
              <Typography style={{textAlign : "center", fontSize: "20px"}}> Team {val.TeamName} </Typography>
              <FormControl component="fieldset" disabled ={this.props.timerCount !== 11}>
                <FormLabel component="legend" style ={{ whiteSpace:"pre-wrap", color: "black"}}>{val.Question} </FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="team2"
                  value={team2}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value={val.Option1} control={<Radio />} label={val.Option1} />
                  <FormControlLabel value={val.Option2} control={<Radio />} label={val.Option2} />
                  <FormControlLabel value={val.Option3} control={<Radio />} label={val.Option3} />
                  <FormControlLabel value={val.Option4} control={<Radio />} label={val.Option4} />
                  <FormControlLabel value={val.Option5} control={<Radio />} label={val.Option5} />
                </RadioGroup>
                <div>
                {this.props.timerCount === 11 &&<Button  variant="contained" color="primary" disabled={this.state.team2 === ""} onClick ={this.handleSubmit.bind(this,"team2",val.CorrectAnswer)}>Submit </Button>}
                </div>
              </FormControl>
              </div>
            )
          }
          if(val.Round === 4 && val.TeamName === 3 && this.props.timerCount===12){
            return (
              <div key ={index}>
              <Typography style={{textAlign : "center", fontSize: "20px"}}> Team {val.TeamName} </Typography>
              <FormControl component="fieldset" disabled ={this.props.timerCount !== 12}>
                <FormLabel component="legend" style ={{ whiteSpace:"pre-wrap", color: "black"}}>{val.Question} </FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="team3"
                  value={team3}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value={val.Option1} control={<Radio />} label={val.Option1} />
                  <FormControlLabel value={val.Option2} control={<Radio />} label={val.Option2} />
                  <FormControlLabel value={val.Option3} control={<Radio />} label={val.Option3} />
                  <FormControlLabel value={val.Option4} control={<Radio />} label={val.Option4} />
                  <FormControlLabel value={val.Option5} control={<Radio />} label={val.Option5} />
                </RadioGroup>
                <div>
                {this.props.timerCount === 12 &&<Button  variant="contained" color="primary" disabled={this.state.team3 === ""} onClick ={this.handleSubmit.bind(this,"team3",val.CorrectAnswer)}>Submit </Button>}
                </div>
              </FormControl>
              </div>
            )
          }
        })}
        
      </div>
    )
  }   
}
export default Round4;