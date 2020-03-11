import React,{Component} from 'react';
import './Quiz.css';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Ten from './Ten';
import Eleven from './Eleven';
import Twelve from './Twelve';
import Thirteen from './Thirteen';
import Fourteen from './Fourteen';
import Fifteen from './Fifteen';
import Sixteen from './Sixteen';
import Seventeen from './Seventeen';
import Eighteen from './Eighteen';
import Nineteen from './Nineteen';
import Twenty from './Twenty';
import Tone from './Tone';
import Ttwo from './Ttwo';
import Tthree from './Tthree';
import Tfour from './Tfour';
import Tfive from './Tfive';
let corrArr = [];
class Quiz extends Component {
    constructor(props){
        super(props);
        this.state=({
            score: 0,
            answer: '',
            final: '',
            clicked: false,
            announce:''
            
        });
        this.handleChange = this.handleChange.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }
    handleChange(event){
       if(event.target.value==="correct"&&(corrArr.includes(event.target.name)===false)){
           corrArr.push(event.target.name);
           this.setState({
            answer: event.target.value,
            score: this.state.score+1
        })
       } else if(event.target.value!=="correct"&&corrArr.includes(event.target.name)){
           corrArr = corrArr.filter(item => item!==event.target.name);
           this.setState({
           answer: event.target.value,
           score: this.state.score-1
        })
       } else if(event.target.value!=="correct"&&corrArr.includes(event.target.name)===false) {
              this.setState({
                  answer: event.target.value
              })
       } 
        
    }

    handleSub(event){
        this.setState({
            final: this.state.score,
            clicked: true
        })
        if(this.state.score===25){
            this.setState({
                announce: "World Heavyweight Trivia Champion!"
            })
        } else if(this.state.score<25&&this.state.score>19){
            this.setState({
                announce: "Main eventer!"
            })
        } else if(this.state.score<20&&this.state.score>13){
            this.setState({
                announce: "Mid-carder"
            })
        } else if(this.state.score<14&&this.state.score>7){
            this.setState({
                announce: "Lower mid-carder"
            })
        } else {
            this.setState({
                announce: "Jabroni"
            })
        }
           event.preventDefault();
    }

    render(){
        return (  
            this.state.clicked?
            <div>
                <h1>Your Score:{this.state.final}/25</h1>
                <h1>{this.state.announce}</h1>
                <button onClick={() => {
                corrArr = [];
                this.setState({
                clicked:false,
                score: 0,
                final: '',
                answer:'',
                announce: ''
            })}}>Play again</button></div>:
            <div>
            <h1>Pro Wrestling & MMA Quiz!</h1>
            <form value={this.state.answer} onSubmit={this.handleSub} onChange={this.handleChange}>
            <form><One /><br/></form>
            <form><Two/><br/></form>
            <form><Three/><br/></form>
            <form><Four/><br/></form>
            <form><Five/><br/></form>
            <form><Six/><br/></form>
            <form><Seven/><br/></form>
            <form><Eight/><br/></form>
            <form><Nine/><br/></form>
            <form><Ten/><br/></form>
            <form><Eleven/><br/></form>
            <form><Twelve/><br/></form>
            <form><Thirteen/><br/></form>
            <form><Fourteen/><br/></form>
            <form><Fifteen/><br/></form>
            <form><Sixteen/><br/></form>
            <form><Seventeen/><br/></form>
            <form><Eighteen/><br/></form>
            <form><Nineteen/><br/></form>
            <form><Twenty/><br/></form>
            <form><Tone/><br/></form>
            <form><Ttwo/><br/></form>
            <form><Tthree/><br/></form>
            <form><Tfour/><br/></form>
            <form><Tfive/><br/></form>    
            <input type="submit" value="Results!!!"/>
            </form>               
            </div>
        )
    }
}

export default Quiz;

