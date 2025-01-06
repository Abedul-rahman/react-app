import { useNavigate } from "react-router-dom"
import styleLog from "../LoginComps/Login.module.css";
import useAuth from "../hooks/useAuth";

const UnAuthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate("/");
    const  {auth}=useAuth();
    console.log(auth);
    return (
        <div style={{textAlign:'center'}} >
            <h1>Oops!</h1>
            <p>404 Page not found!</p>
            <br />
            <div>
                <button className={styleLog.btn} style={{color:"white",border:"hidden",boxShadow:"none"}} onClick={goBack}>visit our Homepage</button>
            </div>
        </div>
    )
}

export default UnAuthorized