import React,{Component} from 'react';

class Two extends Component {
      
    render(){
        return (
            <div>               
                <label>What patriotic wrestler defended America's honor by bodyslamming Yokozuna?</label><br />
                <input type="radio" id="twoa" name="two" value="twoa"/>
                <label for="twoa">Sgt Slaughter</label><br />
                <input type="radio" id="twob" name="two" value="twob"/>
                <label for="twob">The Undertaker</label><br />
                <input type="radio" id="two" name="two" value="two"/>
                <label for="two">Lex Luger</label><br />
                <input type="radio" id="twoc" name="two" value="twoc"/>
                <label for="twoc">Hulk Hogan</label><br />                              
            </div>
        )
    }
}


export default Two;