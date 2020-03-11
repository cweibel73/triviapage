import React,{Component} from 'react';

class Twelve extends Component {  
    
    render(){
        return (
            <div>               
                <label>Who was Ronda Rousey's very first opponent in the UFC?</label><br />
                <input type="radio" id="twelvea" name="twelve" value="twelvea"/>
                <label for="twelvea">Miesha Tate</label><br />
                <input type="radio" id="twelve" name="twelve" value="twelve"/>
                <label for="twelve">Liz Carmouche</label><br />
                <input type="radio" id="twelveb" name="twelve" value="twelveb"/>
                <label for="twelveb">Julia Budd</label><br />
                <input type="radio" id="twelvec" name="twelve" value="twelvec"/>
                <label for="twelvec">Cat Zingano</label><br />                           
            </div>
        )
    }
}


export default Twelve;