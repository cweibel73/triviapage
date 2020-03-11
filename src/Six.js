import React,{Component} from 'react';

class Six extends Component {
      
    render(){
        return (
            <div>               
                <label>Who did Conor McGregor defeat for his first UFC title and which title did he win?</label><br />
                <input type="radio" id="six" name="six" value="six"/>
                <label for="six">Jose Aldo for the featherweight title</label><br />
                <input type="radio" id="sixa" name="six" value="sixa"/>
                <label for="sixa">Eddie Alvarez for the lightweight title</label><br />
                <input type="radio" id="sixb" name="six" value="sixb"/>
                <label for="sixb">Jose Aldo for the lightweight title</label><br />
                <input type="radio" id="sixc" name="six" value="sixc"/>
                <label for="sixc">Anthony Pettis for the welterweight title</label><br />                              
            </div>
        )
    }
}


export default Six;