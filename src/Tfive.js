import React,{Component} from 'react';

class Tfive extends Component {  
    
    render(){
        return (
            <div>               
                <label>What WWF wrestler became enraged when fans would chant "Wimp!"?</label><br />
                <input type="radio" id="tfivea" name="tfive" value="tfivea"/>
                <label for="tfivea">Gillberg</label><br />
                <input type="radio" id="tfiveb" name="tfive" value="tfiveb"/>
                <label for="tfiveb">Crybaby Buxton</label><br />
                <input type="radio" id="tfive" name="tfive" value="tfive"/>
                <label for="tfive">Iron Mike Sharpe</label><br />
                <input type="radio" id="tfivec" name="tfive" value="tfivec"/>
                <label for="tfivec">Paul Orndorff</label><br />                           
            </div>
        )
    }
}


export default Tfive;