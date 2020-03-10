import React,{Component} from 'react';

class Five extends Component {
      
    render(){
        return (
            <div>               
                <label>Which of these wrestlers was never a member of Demolition under a different name?</label><br />
                <input type="radio" id="darsow" name="five" value="darsow"/>
                <label for="darsow">Blacktop Bully</label><br />
                <input type="radio" id="correct" name="five" value="correct"/>
                <label for="correct">Adam Bomb</label><br />
                <input type="radio" id="rex" name="five" value="rex"/>
                <label for="rex">Moondog Rex</label><br />
                <input type="radio" id="ax" name="five" value="ax"/>
                <label for="ax">Masked Superstar</label><br />                              
            </div>
        )
    }
}


export default Five;