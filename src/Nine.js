import React,{Component} from 'react';

class Nine extends Component {  
    
    render(){
        return (
            <div>               
                <label>Which one of these despicable acts did the Big Bossman NOT do?</label><br />
                <input type="radio" id="snow" name="nine" value="snow"/>
                <label for="snow">Killed Al Snow's dog and fed it to him</label><br />
                <input type="radio" id="correct" name="nine" value="correct"/>
                <label for="correct">Ran over Steve Austin with a police car</label><br />
                <input type="radio" id="show" name="nine" value="show"/>
                <label for="show">Disrupted Big Show's father's funeral and dragged the casket with his vehicle</label><br />
                <input type="radio" id="cuffs" name="nine" value="cuffs"/>
                <label for="cuffs">Handcuffed opponents to the ring ropes before hitting them with his baton</label><br />                           
            </div>
        )
    }
}


export default Nine;