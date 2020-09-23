import React, {Component} from 'react'
import Car from './Components/Car';

import Alert from './Components/Alert';

class MyApp extends Component {
    render(){
        return(<div className = "MyApp">

    <Car />
 
    <Alert />
        </div>
        );

    }
}
export default MyApp
