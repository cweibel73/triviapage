import React,{Component} from 'react';

class Nineteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>What talk show host has trained with Chuck Liddell?</label><br />
                <input type="radio" id="nineteena" name="nineteen" value="nineteena"/>
                <label for="nineteena">Arsenio Hall</label><br />
                <input type="radio" id="nineteenb" name="nineteen" value="nineteenb"/>
                <label for="nineteenb">Tom Leykis</label><br />
                <input type="radio" id="nineteenc" name="nineteen" value="nineteenc"/>
                <label for="nineteenc">Jon Stewart</label><br />
                <input type="radio" id="nineteen" name="nineteen" value="nineteen"/>
                <label for="nineteen">Sean Hannity</label><br />                           
            </div>
        )
    }
}


export default Nineteen;