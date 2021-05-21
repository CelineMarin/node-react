import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Button as MuiButton, TextField} from '@material-ui/core'
import Button from './components/Button';
import Menu from './components/Menu';

function App() {
  //javascript

  const BASEURL = "http://localhost:8080"

  const myValues = [1,2,3,4,5,6,7,8,9,10]

  const API = {helloWorld:`${BASEURL}/helloworld`, username: (username:string) => `${BASEURL}/user/${username}`}

const [state, setState] = useState(false)  

const [helloH, setHelloH] = useState()
const [username, setUsername] = useState('')
const [displayedUsername, setDisplayedUsername] = useState('')

useEffect(() => {
const setup = async () => {
  const {data} = await axios.get(API.helloWorld)
  console.log(data)
  setHelloH(data)
}

 setup()
},[state])


const handleClickUser = async () => {
  const {data} = await axios.get(API.username(username))

  setDisplayedUsername(data)
}

  return (
    <div>
      <MuiButton onClick={() => {setState(!state)}} variant="contained">Hello world</MuiButton>
      <Button text="test hihihoho">Tottatato</Button>
      <Button increment={8} text="test fdp">fdp</Button>
      <div>{helloH}</div>
      <div>{myValues.map((x) => { 
        return <Button increment={x}>hey</Button>
      })}</div>
      <div><TextField value={username} onChange={(e) => {setUsername(e.target.value)}} variant="outlined"/>
      <MuiButton onClick={() => {handleClickUser()}}>Display</MuiButton></div>
      <div>{displayedUsername}</div>

      <Menu text="Cette page n'existe pas encore !"/>
            
    </div>

    
  );
}

export default App;