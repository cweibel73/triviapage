import React,{Component} from 'react';

class Sixteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>What was the Brawl For All?</label><br />
                <input type="radio" id="mtv" name="sixteen" value="mtv"/>
                <label for="mtv">A match on MTV between Hulk Hogan and Roddy Piper</label><br />
                <input type="radio" id="correct" name="sixteen" value="correct"/>
                <label for="correct">A legitimate fighting tournament involving WWF wrestlers</label><br />
                <input type="radio" id="ufc" name="sixteen" value="ufc"/>
                <label for="ufc">The name of a 2006 UFC card featuring Chuck Liddell vs. Tito Ortiz</label><br />
                <input type="radio" id="wcw" name="sixteen" value="wcw"/>
                <label for="wcw">The name of a 60-man battle royal that took place in WCW</label><br />                           
            </div>
        )
    }
}


export default Sixteen;