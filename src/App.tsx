import React from "react";
import Todo1 from "./Todo";
import Single from "./Single"
import { useState } from "react";
import Todolist from "./Todolist";
interface pro{
  val:string
  id:number
}
function App() {
const [val,setVal] = useState<string>("")
const [vals,setVals] = useState<pro[]>([])
const fun2 = (e:React.FormEvent) => {
   e.preventDefault();
   setVals([...vals,{val:val,id:Date.now()}])
   setVal("")
}
console.log(vals)
  return (
    <>
    
    <h1>Taskify</h1>
    <Todo1  val={val}
    setVal={setVal}
    fun2={fun2}
    ></Todo1>
    <Todolist vals={vals} setVals={setVals}></Todolist>
    
    </>
  )
}

export default App;
