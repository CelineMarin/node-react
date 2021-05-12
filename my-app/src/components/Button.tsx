import React, {useState} from 'react'

interface ButtonProps {
    children:string
    text:string
}

function Button({children, text}:ButtonProps){
    const [state, setState] = useState(0)
   // const buttonName = "Yey";

   const handleClick = () => {
       window.alert(text)
   }

    return(
        <>
        {/*<button onClick={handleClick}>{children}</button>*/}
        <button onClick={() => setState(state+1)} style={{width:500,height:500,fontSize:30}}>{state}</button>

        </>
    );
}

export default Button;