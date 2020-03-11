import React,{Component} from 'react';

class Seventeen extends Component {  
    
    render(){
        return (
            <div>               
                <label>Why was the angle between Steve Austin and Brian Pillman in the 90s controversial?</label><br />
                <input type="radio" id="seventeen" name="seventeen" value="seventeen"/>
                <label for="seventeen">Pillman was armed with a gun</label><br />
                <input type="radio" id="seventeena" name="seventeen" value="seventeena"/>
                <label for="seventeena">Austin gave Pillman's wife a stunner</label><br />
                <input type="radio" id="seventeenb" name="seventeen" value="seventeenb"/>
                <label for="seventeenb">Triple H ran them both over with a car</label><br />
                <input type="radio" id="seventeenc" name="seventeen" value="seventeenc"/>
                <label for="seventeenc">Austin stole Pillman's car</label><br />                           
            </div>
        )
    }
}


export default Seventeen;