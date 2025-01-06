import { useNavigate } from "react-router-dom"
import styleLog from "../LoginComps/Login.module.css";
import useAuth from "../hooks/useAuth";

const UnAuthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const  {auth}=useAuth();
    console.log(auth);
    return (
        <section className={styleLog}>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div>
                <button className={styleLog.btn} style={{color:"black",border:"hidden",boxShadow:"none"}} onClick={goBack}>Go Back</button>
            </div>
        </section>
    )
}

export default UnAuthorized