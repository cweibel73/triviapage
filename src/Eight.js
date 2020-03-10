import React,{Component} from 'react';

class Eight extends Component {  
    
    render(){
        return (
            <div>               
                <label>What caused friction between Rashad Evans and Matt Hughes during the Ultimate Fighter?</label><br />
                <input type="radio" id="dirty" name="eight" value="dirty"/>
                <label for="dirty">Hughes thought Evans was a dirty fighter</label><br />
                <input type="radio" id="gsp" name="eight" value="gsp"/>
                <label for="gsp">Evans liked Georges St Pierre better than Hughes</label><br />
                <input type="radio" id="pol" name="eight" value="pol"/>
                <label for="pol">They had differing political views</label><br />
                <input type="radio" id="correct" name="eight" value="correct"/>
                <label for="correct">Hughes felt Evans was showboating during his fight</label><br />                           
            </div>
        )
    }
}


export default Eight;