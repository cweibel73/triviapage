import React,{Component} from 'react';

class Tone extends Component {  
    
    render(){
        return (
            <div>               
                <label>What is known as the "H bomb"?</label><br />
                <input type="radio" id="correct" name="tone" value="correct"/>
                <label for="correct">Dan Henderson's powerful punch</label><br />
                <input type="radio" id="hhh" name="tone" value="hhh"/>
                <label for="hhh">Triple H's finishing move</label><br />
                <input type="radio" id="hogan" name="tone" value="hogan"/>
                <label for="hogan">Hulk Hogan's legdrop</label><br />
                <input type="radio" id="team" name="tone" value="team"/>
                <label for="team">The team of Bret Hart and Jim Neidhart</label><br />                           
            </div>
        )
    }
}


export default Tone;