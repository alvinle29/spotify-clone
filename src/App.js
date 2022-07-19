import React,{useEffect} from 'react'
import Login from './components/Login'

export default function App() {
  useEffect(()=>{
    const hash = window.location.hash;
    console.log(hash)
    if (hash){
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token)
    }
  },[])

  return (
    <div>
      <Login/>
    </div>
  )
}
