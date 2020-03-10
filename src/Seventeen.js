import React,{Component} from 'react';

class Seventeen extends Component {  
    
    render(){
        return (
            <div>               
                <label>Why was the angle between Steve Austin and Brian Pillman in the 90s controversial?</label><br />
                <input type="radio" id="correct" name="seventeen" value="correct"/>
                <label for="correct">Pillman was armed with a gun</label><br />
                <input type="radio" id="wife" name="seventeen" value="wife"/>
                <label for="wife">Austin gave Pillman's wife a stunner</label><br />
                <input type="radio" id="car" name="seventeen" value="car"/>
                <label for="car">Triple H ran them both over with a car</label><br />
                <input type="radio" id="stole" name="seventeen" value="stole"/>
                <label for="stole">Austin stole Pillman's car</label><br />                           
            </div>
        )
    }
}


export default Seventeen;