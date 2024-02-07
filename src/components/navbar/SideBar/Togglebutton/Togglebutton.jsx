import "./togglebutton.scss";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Togglebutton = ({ setopen ,open})=>{
    return(
    <button onClick={()=>setopen((prev)=>!prev)}>{open? <RxCross2 className="iconbutton"/>
    :<FiAlignJustify className="iconbutton"/> } </button>

    )

}
export default Togglebutton;