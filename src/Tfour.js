import React,{Component} from 'react';

class Tfour extends Component {  
    
    render(){
        return (
            <div>               
                <label>Which of these wrestling personalities was a guest host on talk station Air America?</label><br />
                <input type="radio" id="jbl" name="tfour" value="jbl"/>
                <label for="jbl">JBL</label><br />
                <input type="radio" id="correct" name="tfour" value="correct"/>
                <label for="correct">Mick Foley</label><br />
                <input type="radio" id="ross" name="tfour" value="ross"/>
                <label for="ross">Jim Ross</label><br />
                <input type="radio" id="jim" name="tfour" value="jim"/>
                <label for="jim">Jim Cornette</label><br />                           
            </div>
        )
    }
}


export default Tfour;