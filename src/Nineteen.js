import React,{Component} from 'react';

class Nineteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>What talk show host has trained with Chuck Liddell?</label><br />
                <input type="radio" id="hall" name="nineteen" value="hall"/>
                <label for="hall">Arsenio Hall</label><br />
                <input type="radio" id="tom" name="nineteen" value="tom"/>
                <label for="tom">Tom Leykis</label><br />
                <input type="radio" id="jon" name="nineteen" value="jon"/>
                <label for="jon">Jon Stewart</label><br />
                <input type="radio" id="correct" name="nineteen" value="correct"/>
                <label for="correct">Sean Hannity</label><br />                           
            </div>
        )
    }
}


export default Nineteen;