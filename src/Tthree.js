import React,{Component} from 'react';

class Tthree extends Component {  
    
    render(){
        return (
            <div>               
                <label>What wrestler used to date comedian Amy Schumer?</label><br />
                <input type="radio" id="correct" name="tthree" value="correct"/>
                <label for="correct">Dolph Ziggler</label><br />
                <input type="radio" id="cena" name="tthree" value="cena"/>
                <label for="cena">John Cena</label><br />
                <input type="radio" id="dave" name="tthree" value="dave"/>
                <label for="dave">Batista</label><br />
                <input type="radio" id="bubba" name="tthree" value="bubba"/>
                <label for="bubba">Bubba Ray Dudley</label><br />                           
            </div>
        )
    }
}


export default Tthree;