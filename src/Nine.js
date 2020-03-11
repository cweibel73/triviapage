import React,{Component} from 'react';

class Nine extends Component {  
    
    render(){
        return (
            <div>               
                <label>Which one of these despicable acts did the Big Bossman NOT do?</label><br />
                <input type="radio" id="ninea" name="nine" value="ninea"/>
                <label for="ninea">Killed Al Snow's dog and fed it to him</label><br />
                <input type="radio" id="nine" name="nine" value="nine"/>
                <label for="nine">Ran over Steve Austin with a police car</label><br />
                <input type="radio" id="nineb" name="nine" value="nineb"/>
                <label for="nineb">Disrupted Big Show's father's funeral and dragged the casket with his vehicle</label><br />
                <input type="radio" id="ninec" name="nine" value="ninec"/>
                <label for="ninec">Handcuffed opponents to the ring ropes before hitting them with his baton</label><br />                           
            </div>
        )
    }
}


export default Nine;