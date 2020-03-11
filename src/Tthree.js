import React,{Component} from 'react';

class Tthree extends Component {  
    
    render(){
        return (
            <div>               
                <label>What wrestler used to date comedian Amy Schumer?</label><br />
                <input type="radio" id="tthree" name="tthree" value="tthree"/>
                <label for="tthree">Dolph Ziggler</label><br />
                <input type="radio" id="tthreea" name="tthree" value="tthreea"/>
                <label for="tthreea">John Cena</label><br />
                <input type="radio" id="tthreeb" name="tthree" value="tthreeb"/>
                <label for="tthreeb">Batista</label><br />
                <input type="radio" id="tthreec" name="tthree" value="tthreec"/>
                <label for="tthreec">Bubba Ray Dudley</label><br />                           
            </div>
        )
    }
}


export default Tthree;