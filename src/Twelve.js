import React,{Component} from 'react';

class Twelve extends Component {  
    
    render(){
        return (
            <div>               
                <label>Who was Ronda Rousey's very first opponent in the UFC?</label><br />
                <input type="radio" id="tate" name="twelve" value="tate"/>
                <label for="tate">Miesha Tate</label><br />
                <input type="radio" id="correct" name="twelve" value="correct"/>
                <label for="correct">Liz Carmouche</label><br />
                <input type="radio" id="budd" name="twelve" value="budd"/>
                <label for="budd">Julia Budd</label><br />
                <input type="radio" id="cat" name="twelve" value="cat"/>
                <label for="cat">Cat Zingano</label><br />                           
            </div>
        )
    }
}


export default Twelve;