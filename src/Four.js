import React,{Component} from 'react';

class Four extends Component {
      
    render(){
        return (
            <div>               
                <label>What is the name of the opponent Tank Abbott nearly threw over the top of the octagon?</label><br />
                <input type="radio" id="foura" name="four" value="foura"/>
                <label for="foura">Kimo</label><br />
                <input type="radio" id="four" name="four" value="four"/>
                <label for="four">Cal Worsham</label><br />
                <input type="radio" id="fourb" name="four" value="fourb"/>
                <label for="fourb">Steve Jennum</label><br />
                <input type="radio" id="fourc" name="four" value="fourc"/>
                <label for="fourc">Scott Ferrozo</label><br />                              
            </div>
        )
    }
}


export default Four;