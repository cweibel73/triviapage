import React,{Component} from 'react';

class Six extends Component {
      
    render(){
        return (
            <div>               
                <label>Who did Conor McGregor defeat for his first UFC title and which title did he win?</label><br />
                <input type="radio" id="correct" name="six" value="correct"/>
                <label for="correct">Jose Aldo for the featherweight title</label><br />
                <input type="radio" id="eddie" name="six" value="eddie"/>
                <label for="eddie">Eddie Alvarez for the lightweight title</label><br />
                <input type="radio" id="aldo" name="six" value="aldo"/>
                <label for="aldo">Jose Aldo for the lightweight title</label><br />
                <input type="radio" id="pettis" name="six" value="pettis"/>
                <label for="pettis">Anthony Pettis for the welterweight title</label><br />                              
            </div>
        )
    }
}


export default Six;