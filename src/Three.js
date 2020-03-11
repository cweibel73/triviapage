import React,{Component} from 'react';

class Three extends Component {
      
    render(){
        return (
            <div>               
                <label>Which of these wrestlers was never a member of the infamous Four Horsemen?</label><br />
                <input type="radio" id="threea" name="three" value="threea"/>
                <label for="threea">Paul Roma</label><br />
                <input type="radio" id="threeb" name="three" value="threeb"/>
                <label for="threeb">Sid Vicious</label><br />
                <input type="radio" id="threec" name="three" value="threec"/>
                <label for="threec">Steve McMichael</label><br />
                <input type="radio" id="three" name="three" value="three"/>
                <label for="three">Paul Orndorff</label><br />                              
            </div>
        )
    }
}


export default Three;