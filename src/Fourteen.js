import React,{Component} from 'react';

class Fourteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>Who did Diamond Dallas Page manage while in the AWA?</label><br />
                <input type="radio" id="xtian" name="fourteen" value="xtian"/>
                <label for="xtian">Christian</label><br />
                <input type="radio" id="studd" name="fourteen" value="studd"/>
                <label for="studd">Diamond Studd</label><br />
                <input type="radio" id="nick" name="fourteen" value="nick"/>
                <label for="nick">Nick Bockwinkel</label><br />
                <input type="radio" id="correct" name="fourteen" value="correct"/>
                <label for="correct">Badd Company</label><br />                           
            </div>
        )
    }
}


export default Fourteen;