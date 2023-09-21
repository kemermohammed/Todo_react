interface proop{
    val:string
    setVal: React.Dispatch<React.SetStateAction<string>>
    fun2:(e:React.FormEvent) => void
}
const Todo1  = ({val,setVal,fun2}:proop) =>{
    console.log(val)
    return <form className="input" onSubmit={fun2}>
    <input type="input" value={val} onChange={(e)=>setVal(e.target.value)} />    
    <button type="submit">Go</button></form>
}
export default Todo1