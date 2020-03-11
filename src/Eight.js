import React,{Component} from 'react';

class Eight extends Component {  
    
    render(){
        return (
            <div>               
                <label>What caused friction between Rashad Evans and Matt Hughes during the Ultimate Fighter?</label><br />
                <input type="radio" id="eighta" name="eight" value="eighta"/>
                <label for="eighta">Hughes thought Evans was a dirty fighter</label><br />
                <input type="radio" id="eightb" name="eight" value="eightb"/>
                <label for="eightb">Evans liked Georges St Pierre better than Hughes</label><br />
                <input type="radio" id="eightc" name="eight" value="eightc"/>
                <label for="eightc">They had differing political views</label><br />
                <input type="radio" id="eight" name="eight" value="eight"/>
                <label for="eight">Hughes felt Evans was showboating during his fight</label><br />                           
            </div>
        )
    }
}


export default Eight;