import React,{Component} from 'react';

class One extends Component {  
    
    render(){
        return (
            <div>               
                <label>Who did Hulk Hogan defeat for his first WWF Title?</label><br />
                <input type="radio" id="one" name="one" value="one"/>
                <label for="one">Iron Sheik</label><br />
                <input type="radio" id="onea" name="one" value="onea"/>
                <label for="onea">Andre The Giant</label><br />
                <input type="radio" id="oneb" name="one" value="oneb"/>
                <label for="oneb">Mr Perfect</label><br />
                <input type="radio" id="onec" name="one" value="onec"/>
                <label for="onec">Ernie Ladd</label><br />                         
            </div>
        )
    }
}


export default One;