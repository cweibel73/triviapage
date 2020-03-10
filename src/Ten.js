import React,{Component} from 'react';

class Ten extends Component {  
    
    render(){
        return (
            <div>               
                <label>What did Butterbean say was the reason WWE booked him to fight Bart Gunn at Wrestlemania?</label><br />
                <input type="radio" id="reward" name="ten" value="reward"/>
                <label for="reward">To reward Gunn for his Brawl For All performance</label><br />
                <input type="radio" id="ufc" name="ten" value="ufc"/>
                <label for="ufc">To help Gunn get a job with the UFC</label><br />
                <input type="radio" id="buys" name="ten" value="buys"/>
                <label for="buys">To increase the number of PPV sales among boxing fans</label><br />
                <input type="radio" id="correct" name="ten" value="correct"/>
                <label for="correct">To punish Bart Gunn for not throwing a fight</label><br />                           
            </div>
        )
    }
}


export default Ten;