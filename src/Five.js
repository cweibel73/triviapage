import React,{Component} from 'react';

class Five extends Component {
      
    render(){
        return (
            <div>               
                <label>Which of these wrestlers was never a member of Demolition under a different name?</label><br />
                <input type="radio" id="fivea" name="five" value="fivea"/>
                <label for="fivea">Blacktop Bully</label><br />
                <input type="radio" id="five" name="five" value="five"/>
                <label for="five">Adam Bomb</label><br />
                <input type="radio" id="fiveb" name="five" value="fiveb"/>
                <label for="fiveb">Moondog Rex</label><br />
                <input type="radio" id="fivec" name="five" value="fivec"/>
                <label for="fivec">Masked Superstar</label><br />                              
            </div>
        )
    }
}


export default Five;