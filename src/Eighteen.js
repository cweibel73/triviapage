import React,{Component} from 'react';

class Eighteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>Who ended Fedor Emilianenko's nearly 10-year undefeated streak?</label><br />
                <input type="radio" id="dan" name="eighteen" value="dan"/>
                <label for="dan">Dan Henderson</label><br />
                <input type="radio" id="foot" name="eighteen" value="foot"/>
                <label for="foot">Bigfoot Silva</label><br />
                <input type="radio" id="matt" name="eighteen" value="matt"/>
                <label for="matt">Matt Mitrione</label><br />
                <input type="radio" id="correct" name="eighteen" value="correct"/>
                <label for="correct">Fabricio Werdum</label><br />                           
            </div>
        )
    }
}


export default Eighteen;