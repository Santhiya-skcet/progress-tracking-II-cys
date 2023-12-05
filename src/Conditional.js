import React,{ useState } from 'react'
import Login from './SignIn.js'
import Signup from './SignUp.js'
const Conditional = () => {
    const [state] = useState({isLogged:false});
    
        return(
              state.isLogged?<Login/>:<Signup/>
        )
    };
    export default Conditional;
      