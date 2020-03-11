import React,{Component} from 'react';

class Seven extends Component {
      
    render(){
        return (
            <div>               
                <label>What MMA fighter inspired WWE wrestler Daniel Bryan's "Yes" chant?</label><br />
                <input type="radio" id="sevena" name="seven" value="sevena"/>
                <label for="sevena">Ken Shamrock</label><br />
                <input type="radio" id="sevenb" name="seven" value="sevenb"/>
                <label for="sevenb">CM Punk</label><br />
                <input type="radio" id="seven" name="seven" value="seven"/>
                <label for="seven">Diego Sanchez</label><br />
                <input type="radio" id="sevenc" name="seven" value="sevenc"/>
                <label for="sevenc">Conor McGregor</label><br />                              
            </div>
        )
    }
}


export default Seven;