import React,{Component} from 'react';

class Four extends Component {
      
    render(){
        return (
            <div>               
                <label>What is the name of the opponent Tank Abbott nearly threw over the top of the octagon?</label><br />
                <input type="radio" id="kimo" name="four" value="kimo"/>
                <label for="kimo">Kimo</label><br />
                <input type="radio" id="correct" name="four" value="correct"/>
                <label for="correct">Cal Worsham</label><br />
                <input type="radio" id="jennum" name="four" value="jennum"/>
                <label for="jennum">Steve Jennum</label><br />
                <input type="radio" id="scott" name="four" value="scott"/>
                <label for="scott">Scott Ferrozo</label><br />                              
            </div>
        )
    }
}


export default Four;