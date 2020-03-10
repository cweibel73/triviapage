import React,{Component} from 'react';

class Twenty extends Component {  
    
    render(){
        return (
            <div>               
                <label>What two wrestlers debated the 2004 Presidential Election?</label><br />
                <input type="radio" id="scott" name="twenty" value="scott"/>
                <label for="scott">Scott Steiner and Chris Nowinski</label><br />
                <input type="radio" id="correct" name="twenty" value="correct"/>
                <label for="correct">Mick Foley and JBL</label><br />
                <input type="radio" id="hogan" name="twenty" value="hogan"/>
                <label for="hogan">Hulk Hogan and Ric Flair</label><br />
                <input type="radio" id="cena" name="twenty" value="cena"/>
                <label for="cena">John Cena and Randy Orton</label><br />                           
            </div>
        )
    }
}


export default Twenty;