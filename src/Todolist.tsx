import Single from "./Single"

interface pro{
    val:string
    id:number
  }
interface proop{
    
    setVals: React.Dispatch<React.SetStateAction<pro[]>>
    vals: pro[]
}
const Todolist = ({vals,setVals} : proop) => {
    return(
        <>
        {vals.map(t => (
        <Single t = {t} key = {t.id} vals={vals} setVals={setVals}></Single>))}
        </>
    )
}
export default Todolist