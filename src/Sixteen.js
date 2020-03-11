import React,{Component} from 'react';

class Sixteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>What was the Brawl For All?</label><br />
                <input type="radio" id="sixteena" name="sixteen" value="sixteena"/>
                <label for="sixteena">A match on MTV between Hulk Hogan and Roddy Piper</label><br />
                <input type="radio" id="sixteen" name="sixteen" value="sixteen"/>
                <label for="sixteen">A legitimate fighting tournament involving WWF wrestlers</label><br />
                <input type="radio" id="sixteenb" name="sixteen" value="sixteenb"/>
                <label for="sixteenb">The name of a 2006 UFC card featuring Chuck Liddell vs. Tito Ortiz</label><br />
                <input type="radio" id="sixteenc" name="sixteen" value="sixteenc"/>
                <label for="sixteenc">The name of a 60-man battle royal that took place in WCW</label><br />                           
            </div>
        )
    }
}


export default Sixteen;