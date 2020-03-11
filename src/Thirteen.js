import React,{Component} from 'react';

class Thirteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>What was The War To Settle The Score?</label><br />
                <input type="radio" id="thirteena" name="thirteen" value="thirteena"/>
                <label for="thirteena">Bruno Sammartino vs. Larry Zbyszko in a steel cage</label><br />
                <input type="radio" id="thirteen" name="thirteen" value="thirteen"/>
                <label for="thirteen">Hulk Hogan vs. Roddy Piper in a match shown on MTV</label><br />
                <input type="radio" id="thirteenb" name="thirteen" value="thirteenb"/>
                <label for="thirteenb">Wendi Richter vs. Fabulous Moolah in a match shown on MTV</label><br />
                <input type="radio" id="thirteenc" name="thirteen" value="thirteenc"/>
                <label for="thirteenc">Ultimate Warrior vs. Hulk Hogan for the WWF Title</label><br />                           
            </div>
        )
    }
}


export default Thirteen;