import React, {useState} from 'react'
import {Button as MuiButton} from '@material-ui/core'


interface ButtonProps {
    children?:string
    text?:string
    increment?:number
}

function Button({children, text, increment=1}:ButtonProps){
    const [state, setState] = useState(0)
   // const buttonName = "Yey";

   const handleClick = () => {
       window.alert(text)
   }

    return(
        <>
        {/*<button onClick={handleClick}>{children}</button>*/}
        <MuiButton onClick={() => setState(state+increment)} style={{width:100,height:100,fontSize:30}}>{state}</MuiButton>

        </>
    );
}

export default Button;