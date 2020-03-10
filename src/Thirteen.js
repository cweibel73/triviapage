import React,{Component} from 'react';

class Thirteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>What was The War To Settle The Score?</label><br />
                <input type="radio" id="bruno" name="thirteen" value="bruno"/>
                <label for="bruno">Bruno Sammartino vs. Larry Zbyszko in a steel cage</label><br />
                <input type="radio" id="andre" name="thirteen" value="correct"/>
                <label for="correct">Hulk Hogan vs. Roddy Piper in a match shown on MTV</label><br />
                <input type="radio" id="lauper" name="thirteen" value="lauper"/>
                <label for="lauper">Wendi Richter vs. Fabulous Moolah in a match shown on MTV</label><br />
                <input type="radio" id="hogan" name="thirteen" value="hogan"/>
                <label for="hogan">Ultimate Warrior vs. Hulk Hogan for the WWF Title</label><br />                           
            </div>
        )
    }
}


export default Thirteen;