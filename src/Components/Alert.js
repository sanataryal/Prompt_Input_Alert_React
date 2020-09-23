import React from 'react'

export default class Alert extends React.Component{
    punch(){
        var fn = prompt ("Please enter your first name please: ");
        var ln = prompt ("Please enter your last name please: ");
       
         if (fn==="Robert" && ln === "Campbell"){
            document.write("Hello Robert, Welcome Abroad ")
        }
        else if (fn==="Sarah" && ln==="Fisher"){
            document.write("Thank You for your kind visit, Sarah")
        }
        else{document.write("Hello Stranger, sorry I couldn't recognize you.")} 
        
    }
    render(){
        return(
            <button onClick = {this.punch}>My Full Name</button>
        );
    }
    }
