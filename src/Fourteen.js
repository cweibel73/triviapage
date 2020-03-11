import React,{Component} from 'react';

class Fourteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>Who did Diamond Dallas Page manage while in the AWA?</label><br />
                <input type="radio" id="fourteena" name="fourteen" value="fourteena"/>
                <label for="fourteena">Christian</label><br />
                <input type="radio" id="fourteenb" name="fourteen" value="fourteenb"/>
                <label for="fourteenb">Diamond Studd</label><br />
                <input type="radio" id="fourteenc" name="fourteen" value="fourteenc"/>
                <label for="fourteenc">Nick Bockwinkel</label><br />
                <input type="radio" id="fourteen" name="fourteen" value="fourteen"/>
                <label for="fourteen">Badd Company</label><br />                           
            </div>
        )
    }
}


export default Fourteen;