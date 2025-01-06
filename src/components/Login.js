import { useState, useEffect, useRef } from "react";
import styleLog from "../LoginComps/Login.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from 'jwt-decode'
import axios from "../api/axios";





const Login = () => {
    const regUrl='/createUser';
    const loginUrl='/login';
    const [isPending,setIsPending]=useState(false);
    const {setAuth}=useAuth();
    // State hooks for input fields
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [usernameRegister, setUsernameRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const[isActive,setIsActive]=useState(false)
    //Input vaildation
    const [login_emailValid, login_setEmailValid] = useState('');
    const [login_passValid, login_setPassValid] = useState('');
    const [reg_emailValid, reg_setEmailValid] = useState('');
    const [reg_passValid, reg_setPassValid] = useState('');
    const [reg_nameValid, reg_setNameValid] = useState('');
   
    // Ref for the login username input
    const [error,setError]=useState("");
    const emailLoginRef = useRef(null);
    const emailRegRef = useRef(null);
    //REGX
    const Name_REGEX = useMemo(() => /^[A-Za-z]{3,16}( [A-Za-z]{3,16}){0,3}$/, []);
    const Pass_REGEX = useMemo(() => /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*=-]).{6,}$/, []);
    const Email_REGEX = useMemo(() => /^[\w.-]+@ju\.edu\.jo$/, []);
    const navigate=useNavigate();
    const location =useLocation();
    const from= location.state?.from?.pathname ||"/dashboard";
    useEffect(()=>{
        login_setEmailValid(emailLogin.match(Email_REGEX))
    },[emailLogin,Email_REGEX])

    useEffect(()=>{
        login_setPassValid(passwordLogin.match(Pass_REGEX))
    },[passwordLogin,Pass_REGEX]) 

    useEffect(()=>{
        reg_setNameValid(usernameRegister.match(Name_REGEX))
    },[usernameRegister,Name_REGEX]) 
    useEffect(()=>{
        reg_setEmailValid(emailRegister.match(Email_REGEX))
    },[emailRegister,Email_REGEX]) 
    useEffect(()=>{
        reg_setPassValid(passwordRegister.match(Pass_REGEX))
    },[passwordRegister,Pass_REGEX]) 
    //switch between login and register
    const switchMode=()=>{
        setIsActive(!isActive);}
    // Focus on the username input field when the component loads
    useEffect(() => {
        if (emailLoginRef.current) {
            emailLoginRef.current.focus();
        }
    }, []);
    //handling login and register

    const handleLogin=async(e,email=emailLogin,password=passwordLogin)=>{
        e.preventDefault();
        setIsPending(true)
        try{
            const response= await axios.post(loginUrl,{
                username: email,
                password: password
            })

            const accessToken=response?.data;
            const role = jwtDecode(accessToken).role;
                setAuth({email:emailLogin,role,accessToken})
                setIsPending(false);
                setEmailLogin("");
                setEmailRegister("");
                setPasswordLogin("");
                setPasswordRegister("");
                setUsernameRegister("");
                navigate(from,{replace:true});
        }
        catch(err){   
            setIsPending(false)
            if(!err?.response){
            setError('no server response');
        }
            else{
                setError(err?.response?.data?.message);
            }
            

        }     
    }
    const handleRegister=async(e)=>{
        e.preventDefault();
        setIsPending(true)
      try{
        await axios.post(regUrl,
        { 
        username: emailRegister,
        password: passwordRegister,
        fullname: usernameRegister
    },)
        handleLogin(e,emailRegister,passwordRegister)
        }
        catch(err){
            setIsPending(false)
            if(!err?.response){
                setError('no server response\n try again later');
                
            }
            setError(err?.response?.data?.message);
        }
    }

    return (
        <>
            <div className={styleLog.mainContainer}>
                <div className={styleLog.header}>JU Halls</div>
                <div className={`${styleLog.container} ${isActive? styleLog.active:""}`}>
                    <span className={styleLog.box1}></span>
                    <div className={`${styleLog.form} ${styleLog.login}`}>
                        <h1 className={styleLog.title}>Login</h1>
                        <form onSubmit={handleLogin} >
                            <div className={styleLog.inputBox} >
                                <input
                                    className={  emailLogin?login_emailValid?styleLog.valid:styleLog.invalid:""}
                                    type="text"
                                    id="email-log"
                                    name="email-log"
                                    required
                                    ref={emailLoginRef} // Ref for the username input
                                    value={emailLogin}
                                    onChange={(e) => setEmailLogin(e.target.value)} // Update state on change
                                />
                                <label htmlFor="email-log">Email</label>
                                <i className="fas fa-envelope"></i>
                               { emailLogin&&!login_emailValid &&<p className={`${styleLog.instructions} `}>
                                Please enter a your  University email address in the format: username@ju.edu.jo 
                                </p>}
                            </div>
                            <div className={styleLog.inputBox}>
                                <input
                                    className={  passwordLogin?login_passValid?styleLog.valid:styleLog.invalid:""}
                                    type="password"
                                    id="password-log"
                                    name="password-log"
                                    required
                                    value={passwordLogin}
                                    onChange={(e) => setPasswordLogin(e.target.value)} // Update state on change
                                />
                                <label htmlFor="password-log">Password</label>
                                <i className="fas fa-lock"></i>
                                {passwordLogin&&!login_passValid&&<p className={styleLog.instructions}>
                                Your password must be at least 6 characters long and include at least one letter, one number, and one special character
                                 (e.g., #, ?, !, @, $, %, ^, &, *, =, -).
                                </p>

                                }
                                
                            </div>
                            <button className={styleLog.btn} type="submit" id="login" disabled={!login_passValid||!login_emailValid}>
                               {isPending?"Loading..." : "Login"}
                            </button>
                            <div className={styleLog.link}>
                                <p>
                                    Don't have an account? <Link to="/Login" className={styleLog.signUp} onClick={switchMode}>Sign up</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className={`${styleLog.info} ${styleLog.login}`}>
                        <h2>Welcome Back</h2>
                        <p>Login into your account</p>
                        <p style={{'color':'Red'}}>{error}</p>
                    </div>
                    <span className={styleLog.box2}></span>
                    <div className={`${styleLog.form} ${styleLog.register}`}>
                        <h1 className={styleLog.title}>Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className={styleLog.inputBox}>
                                <input
                                    className={  emailRegister?reg_emailValid?styleLog.valid:styleLog.invalid:""}
                                    type="text"
                                    id="email-reg"
                                    ref={emailRegRef}
                                    name="email-reg"
                                    required
                                    value={emailRegister}
                                    onChange={(e) => setEmailRegister(e.target.value)} // Update state on change
                                />
                                <label htmlFor="email-reg">Email Address</label>
                                <i className="fas fa-envelope"></i>
                                { emailRegister&&!reg_emailValid &&<p className={`${styleLog.instructions} `}>
                                Please enter a your  University email address in the format: username@ju.edu.jo 
                                </p>}
                            </div>
                            <div className={styleLog.inputBox}>
                                <input
                                    className={  usernameRegister?reg_nameValid?styleLog.valid:styleLog.invalid:""}
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={usernameRegister}
                                    onChange={(e) => setUsernameRegister(e.target.value)} // Update state on change
                                    
                                />
                                <label htmlFor="name">Fullname</label>
                                <i className="fas fa-user"></i>
                                { usernameRegister&&!reg_nameValid &&<p className={`${styleLog.instructions} `}>
                                Please enter a valid name. It should be between 3 to 16 letters long. 
                                </p>}
                                
                            </div>
                            <div className={styleLog.inputBox}>
                                <input
                                    className={  passwordRegister?reg_passValid?styleLog.valid:styleLog.invalid:""}
                                    type="password"
                                    id="password-reg"
                                    name="password-reg"
                                    required
                                    value={passwordRegister}
                                    onChange={(e) => setPasswordRegister(e.target.value)} // Update state on change
                                />
                                <label htmlFor="password-reg">Password</label>
                                <i className="fas fa-lock"></i>
                                {passwordRegister&&!reg_passValid&&<p className={styleLog.instructions}>
                                Your password must be at least 6 characters long and include at least one letter, one number, and one special character
                                 (e.g., #, ?, !, @, $, %, ^, &, *, =, -).
                                </p>}
                            </div>
                            <button className={styleLog.btn} type="submit" id="reg" disabled={!reg_passValid||!reg_nameValid||!reg_emailValid}>
                               {isPending?"Loading...":"Register"}
                            </button>
                            <div className={styleLog.link}>
                                <p>
                                    Already have an account? <Link to='/Login' className={styleLog.loginLink} onClick={switchMode}>Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className={`${styleLog.info} ${styleLog.register}`}>
                        <h2>Welcome!</h2>
                        <p>Create your account</p>
                        <p style={{'color':'Red'}}>{error}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;