import React,{Component} from 'react';

class Twenty extends Component {  
    
    render(){
        return (
            <div>               
                <label>What two wrestlers debated the 2004 Presidential Election?</label><br />
                <input type="radio" id="twentya" name="twenty" value="twentya"/>
                <label for="twentya">Scott Steiner and Chris Nowinski</label><br />
                <input type="radio" id="twenty" name="twenty" value="twenty"/>
                <label for="twenty">Mick Foley and JBL</label><br />
                <input type="radio" id="twentyb" name="twenty" value="twentyb"/>
                <label for="twentyb">Hulk Hogan and Ric Flair</label><br />
                <input type="radio" id="twentyc" name="twenty" value="twentyc"/>
                <label for="twentyc">John Cena and Randy Orton</label><br />                           
            </div>
        )
    }
}


export default Twenty;