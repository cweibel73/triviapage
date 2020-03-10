import React,{Component} from 'react';

class One extends Component {  
    
    render(){
        return (
            <div>               
                <label>Who did Hulk Hogan defeat for his first WWF Title?</label><br />
                <input type="radio" id="correct" name="one" value="correct"/>
                <label for="correct">Iron Sheik</label><br />
                <input type="radio" id="andre" name="one" value="andre"/>
                <label for="andre">Andre The Giant</label><br />
                <input type="radio" id="perfect" name="one" value="perfect"/>
                <label for="perfect">Mr Perfect</label><br />
                <input type="radio" id="ladd" name="one" value="ladd"/>
                <label for="ladd">Ernie Ladd</label><br />                           
            </div>
        )
    }
}


export default One;