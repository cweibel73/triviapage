import React,{Component} from 'react';

class Ttwo extends Component {  
    
    render(){
        return (
            <div>               
                <label>Which one of these was an actual member of the famous Funk family?</label><br />
                <input type="radio" id="ttwoa" name="ttwo" value="ttwoa"/>
                <label for="ttwoa">Jimmy Jack Funk</label><br />
                <input type="radio" id="ttwo" name="ttwo" value="ttwo"/>
                <label for="ttwo">Hoss Funk</label><br />
                <input type="radio" id="ttwob" name="ttwo" value="ttwob"/>
                <label for="ttwob">Flash Funk</label><br />
                <input type="radio" id="ttwoc" name="ttwo" value="ttwoc"/>
                <label for="ttwoc">Terry Brunk</label><br />                           
            </div>
        )
    }
}


export default Ttwo;