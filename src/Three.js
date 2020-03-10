import React,{Component} from 'react';

class Three extends Component {
      
    render(){
        return (
            <div>               
                <label>Which of these wrestlers was never a member of the infamous Four Horsemen?</label><br />
                <input type="radio" id="roma" name="three" value="roma"/>
                <label for="roma">Paul Roma</label><br />
                <input type="radio" id="sid" name="three" value="sid"/>
                <label for="sid">Sid Vicious</label><br />
                <input type="radio" id="mongo" name="three" value="mongo"/>
                <label for="mongo">Steve McMichael</label><br />
                <input type="radio" id="correct" name="three" value="correct"/>
                <label for="correct">Paul Orndorff</label><br />                              
            </div>
        )
    }
}


export default Three;