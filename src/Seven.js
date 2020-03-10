import React,{Component} from 'react';

class Seven extends Component {
      
    render(){
        return (
            <div>               
                <label>What MMA fighter inspired WWE wrestler Daniel Bryan's "Yes" chant?</label><br />
                <input type="radio" id="ken" name="seven" value="ken"/>
                <label for="ken">Ken Shamrock</label><br />
                <input type="radio" id="punk" name="seven" value="punk"/>
                <label for="punk">CM Punk</label><br />
                <input type="radio" id="correct" name="seven" value="correct"/>
                <label for="correct">Diego Sanchez</label><br />
                <input type="radio" id="conor" name="seven" value="conor"/>
                <label for="conor">Conor McGregor</label><br />                              
            </div>
        )
    }
}


export default Seven;