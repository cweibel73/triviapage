import React,{Component} from 'react';

class Two extends Component {
      
    render(){
        return (
            <div>               
                <label>What patriotic wrestler defended America's honor by bodyslamming Yokozuna?</label><br />
                <input type="radio" id="sgt" name="two" value="sgt"/>
                <label for="sgt">Sgt Slaughter</label><br />
                <input type="radio" id="taker" name="two" value="taker"/>
                <label for="taker">The Undertaker</label><br />
                <input type="radio" id="correct" name="two" value="correct"/>
                <label for="correct">Lex Luger</label><br />
                <input type="radio" id="hogan" name="two" value="hogan"/>
                <label for="hogan">Hulk Hogan</label><br />                              
            </div>
        )
    }
}


export default Two;