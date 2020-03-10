import React,{Component} from 'react';

class Ttwo extends Component {  
    
    render(){
        return (
            <div>               
                <label>Which one of these was an actual member of the famous Funk family?</label><br />
                <input type="radio" id="jack" name="ttwo" value="jack"/>
                <label for="jack">Jimmy Jack Funk</label><br />
                <input type="radio" id="correct" name="ttwo" value="correct"/>
                <label for="correct">Hoss Funk</label><br />
                <input type="radio" id="flash" name="ttwo" value="flash"/>
                <label for="flash">Flash Funk</label><br />
                <input type="radio" id="sabu" name="ttwo" value="sabu"/>
                <label for="sabu">Terry Brunk</label><br />                           
            </div>
        )
    }
}


export default Ttwo;