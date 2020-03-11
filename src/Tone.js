import React,{Component} from 'react';

class Tone extends Component {  
    
    render(){
        return (
            <div>               
                <label>What is known as the "H bomb"?</label><br />
                <input type="radio" id="tone" name="tone" value="tone"/>
                <label for="tone">Dan Henderson's powerful punch</label><br />
                <input type="radio" id="tonea" name="tone" value="tonea"/>
                <label for="tonea">Triple H's finishing move</label><br />
                <input type="radio" id="toneb" name="tone" value="toneb"/>
                <label for="toneb">Hulk Hogan's legdrop</label><br />
                <input type="radio" id="tonec" name="tone" value="tonec"/>
                <label for="tonec">The team of Bret Hart and Jim Neidhart</label><br />                           
            </div>
        )
    }
}


export default Tone;