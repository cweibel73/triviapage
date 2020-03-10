import React,{Component} from 'react';

class Tfive extends Component {  
    
    render(){
        return (
            <div>               
                <label>What WWF wrestler became enraged when fans would chant "Wimp!"?</label><br />
                <input type="radio" id="gill" name="tfive" value="gill"/>
                <label for="gill">Gillberg</label><br />
                <input type="radio" id="bux" name="tfive" value="bux"/>
                <label for="bux">Crybaby Buxton</label><br />
                <input type="radio" id="correct" name="tfive" value="correct"/>
                <label for="correct">Iron Mike Sharpe</label><br />
                <input type="radio" id="paul" name="tfive" value="paul"/>
                <label for="paul">Paul Orndorff</label><br />                           
            </div>
        )
    }
}


export default Tfive;