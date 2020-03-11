import React,{Component} from 'react';

class Eleven extends Component {  
    
    render(){
        return (
            <div>               
                <label>Which of these fighters won the UFC tournament by only fighting once?</label><br />
                <input type="radio" id="elevena" name="eleven" value="elevena"/>
                <label for="elevena">Marco Ruas</label><br />
                <input type="radio" id="eleven" name="eleven" value="eleven"/>
                <label for="eleven">Steve Jennum</label><br />
                <input type="radio" id="elevenb" name="eleven" value="elevenb"/>
                <label for="elevenb">Fred Ettish</label><br />
                <input type="radio" id="elevenc" name="eleven" value="elevenc"/>
                <label for="elevenc">Royce Gracie</label><br />                           
            </div>
        )
    }
}


export default Eleven;