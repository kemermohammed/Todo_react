import {AiOutlineUserAdd,AiFillDelete,AiFillEdit} from "react-icons/ai"
import { useState } from "react"
interface pro{
    val:string
    id:number
  }
interface proop{
    t:pro
    setVals: React.Dispatch<React.SetStateAction<pro[]>>
    vals: pro[]
}

const Single  = ({t,setVals,vals}:proop) =>{
    const [ed,setEd] = useState<boolean>(false)
    const dlt = (id:number) =>{
        setVals(vals.filter((val) => val.id !== id ))
    }
    const edit = (id:number) => {
       <form><input/></form> 
    }
    return(
        <>
        <form>
        
        
           <span>{t.val}</span>
           <span><AiOutlineUserAdd></AiOutlineUserAdd></span>
           <span onClick={() => dlt(t.id)}><AiFillDelete/></span>        
           <span onClick={() => edit(t.id)}><AiFillEdit/></span>
        </form>
        </>
    )
}
export default Single