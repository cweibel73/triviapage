import React,{Component} from 'react';

class Eleven extends Component {  
    
    render(){
        return (
            <div>               
                <label>Which of these fighters won the UFC tournament by only fighting once?</label><br />
                <input type="radio" id="ruas" name="eleven" value="ruas"/>
                <label for="ruas">Marco Ruas</label><br />
                <input type="radio" id="correct" name="eleven" value="correct"/>
                <label for="correct">Steve Jennum</label><br />
                <input type="radio" id="fred" name="eleven" value="fred"/>
                <label for="fred">Fred Ettish</label><br />
                <input type="radio" id="gracie" name="eleven" value="gracie"/>
                <label for="gracie">Royce Gracie</label><br />                           
            </div>
        )
    }
}


export default Eleven;