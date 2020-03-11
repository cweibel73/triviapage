import React,{Component} from 'react';

class Eighteen extends Component {  
    
    render(){
        return (
            <div>               
                <label>Who ended Fedor Emilianenko's nearly 10-year undefeated streak?</label><br />
                <input type="radio" id="eighteena" name="eighteen" value="eighteena"/>
                <label for="eighteena">Dan Henderson</label><br />
                <input type="radio" id="eighteenb" name="eighteen" value="eighteenb"/>
                <label for="eighteenb">Bigfoot Silva</label><br />
                <input type="radio" id="eighteenc" name="eighteen" value="eighteenc"/>
                <label for="eighteenc">Matt Mitrione</label><br />
                <input type="radio" id="eighteen" name="eighteen" value="eighteen"/>
                <label for="eighteen">Fabricio Werdum</label><br />                           
            </div>
        )
    }
}


export default Eighteen;