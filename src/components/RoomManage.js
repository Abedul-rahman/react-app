import { useState } from "react";
import Manage from "../RoomManageComps.js/RoomManagement.module.css"
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const RoomManage = () => {
    const [success,setSuccess]=useState("");
    const [error,setError]=useState("");
    const [type,setType]=useState("college");
    const [func,setFunc]=useState("add")
    const [colName,setColname]=useState("");
    const {auth}=useAuth();
    const  axiosPrivate=useAxiosPrivate();
    const Addcollege= async(e)=> {
        e.preventDefault(); 
        try {
            const response = await axiosPrivate.post('/RoomManagement/createCollege',{
                "collegeName":colName
            });
            console.log(response.data)
            setSuccess("new college added")
            setTimeout(() => {
                setSuccess("");
            }, 3000)
            
        } catch (err) {
            //setError(err);
        }
    };

    return ( 
        <>
        <section className={Manage.box}>
        <h1>System Management</h1>
        
        <div className={Manage.btns}>
        <button onClick={()=>setType("college")}>colleges </button>
        <button onClick={()=>setType("floors")}>Floors </button>
        <button onClick={()=>setType("halls")}>Halls </button>
        </div>
        <br/>
        {error&& <span style={{color:"red"}}> {error}</span>}
        {success&&<span style={{color:"green","font-size":"2rem"}}>{success}</span> }
        </section>

        <form className={Manage.form}>
               <fieldset style={{border:"5px solid ", padding:0}}>

                <legend  className={Manage.btns2}>
                <button onClick={(e)=>{e.preventDefault();setFunc("delete")}}>Delete</button>
                <button onClick={(e)=>{e.preventDefault();setFunc("add")}}>Add a new</button>
                <button onClick={(e)=>{e.preventDefault();setFunc("edit")}}>Edit</button>
            </legend>
            <div className={`${Manage.box2} ${Manage.Add}`}>
                {type==="college"&&func==="add"&&<h3>Add a new college</h3>}
                {type==="college"&&func==="add"&&<input type="text"  value={colName} onChange={(e)=>setColname(e.target.value)}/>}
                {type==="college"&&func==="add"&&<button className={Manage.submit} onClick={Addcollege}>Add</button>}
                {type==="college"&&func==="delete"&& <h3>Delete college</h3>}
                {type==="college"&&func==="delete"&& <select> <option>------</option ></select>}
                {type==="college"&&func==="delete"&&<button className={Manage.submit}>delete</button>}     
                {type==="college"&&func==="edit"&& <h3>Edit college</h3>}
                {type==="college"&&func==="edit"&& <label htmlFor="colleges">Select a college </label>}
                {type==="college"&&func==="edit"&& <select id="colleges"> <option>------</option ></select>}
                {type==="college"&&func==="edit"&& <label htmlFor="name">enter a new name </label>}
                {type==="college"&&func==="edit"&& <input type="text" id="name" />}
                {type==="college"&&func==="edit"&& <button className={Manage.submit}>edit</button>}
            </div>
               </fieldset>
        </form>

        </>
     );
}
 
export default RoomManage;