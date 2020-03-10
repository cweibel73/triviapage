import React,{Component} from 'react';

class Fifteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>Which one of these wrestler vs. celebrity moves did NOT happen?</label><br />
                <input type="radio" id="downey" name="fifteen" value="downey"/>
                <label for="downey">Roddy Piper uses a fire extinguisher on Morton Downey Jr.</label><br />
                <input type="radio" id="correct" name="fifteen" value="correct"/>
                <label for="correct">Mick Foley puts the mandible claw on Mancow Muller</label><br />
                <input type="radio" id="trump" name="fifteen" value="trump"/>
                <label for="trump">Steve Austin gives the stunner to Donald Trump</label><br />
                <input type="radio" id="cuban" name="fifteen" value="cuban"/>
                <label for="cuban">Randy Orton RKOs Mark Cuban</label><br />                           
            </div>
        )
    }
}


export default Fifteen;