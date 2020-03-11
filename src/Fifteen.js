import React,{Component} from 'react';

class Fifteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>Which one of these wrestler vs. celebrity moves did NOT happen?</label><br />
                <input type="radio" id="fifteena" name="fifteen" value="fifteena"/>
                <label for="fifteena">Roddy Piper uses a fire extinguisher on Morton Downey Jr.</label><br />
                <input type="radio" id="fifteen" name="fifteen" value="fifteen"/>
                <label for="fifteen">Mick Foley puts the mandible claw on Mancow Muller</label><br />
                <input type="radio" id="fifteenb" name="fifteen" value="fifteenb"/>
                <label for="fifteenb">Steve Austin gives the stunner to Donald Trump</label><br />
                <input type="radio" id="fifteenc" name="fifteen" value="fifteenc"/>
                <label for="fifteenc">Randy Orton RKOs Mark Cuban</label><br />                           
            </div>
        )
    }
}


export default Fifteen;