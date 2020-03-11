import React,{Component} from 'react';

class Ten extends Component {  
    
    render(){
        return (
            <div>               
                <label>What did Butterbean say was the reason WWE booked him to fight Bart Gunn at Wrestlemania?</label><br />
                <input type="radio" id="tena" name="ten" value="tena"/>
                <label for="tena">To reward Gunn for his Brawl For All performance</label><br />
                <input type="radio" id="tenb" name="ten" value="tenb"/>
                <label for="tenb">To help Gunn get a job with the UFC</label><br />
                <input type="radio" id="tenc" name="ten" value="tenc"/>
                <label for="tenc">To increase the number of PPV sales among boxing fans</label><br />
                <input type="radio" id="ten" name="ten" value="ten"/>
                <label for="ten">To punish Bart Gunn for not throwing a fight</label><br />                           
            </div>
        )
    }
}


export default Ten;