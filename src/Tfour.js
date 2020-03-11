import React,{Component} from 'react';

class Tfour extends Component {  
    
    render(){
        return (
            <div>               
                <label>Which of these wrestling personalities was a guest host on talk station Air America?</label><br />
                <input type="radio" id="tfoura" name="tfour" value="tfoura"/>
                <label for="tfoura">JBL</label><br />
                <input type="radio" id="tfour" name="tfour" value="tfour"/>
                <label for="tfour">Mick Foley</label><br />
                <input type="radio" id="tfourb" name="tfour" value="tfourb"/>
                <label for="tfourb">Jim Ross</label><br />
                <input type="radio" id="tfourc" name="tfour" value="tfourc"/>
                <label for="tfourc">Jim Cornette</label><br />                           
            </div>
        )
    }
}


export default Tfour;