import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let messageInputRef = useRef();
  return (
    <div className="App">
        <form>
            <h2 style={{
                backgroundColor:"deeppink", color:'white', borderRadius:"25px", boxShadow:"10px 10px 10px black", fontSize:"2rem"
            }}>Login</h2>
            <div>
                
                <label>Email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <label>Message</label>
                <input ref={messageInputRef}></input>
            </div>
            
            
            <div>
                <button onClick={()=>{

                    let typedEmail = emailInputRef.current.value;
                    let typedPassword = passwordInputRef.current.value;
                    
                    if(typedEmail == "chethan@gmail.com" && typedPassword == "koduri"){

                    navigate("/dashboard",{state:{msg:messageInputRef.current.value},

                     });
                }else{
                    alert("Invalid Email or Password");
                }
                }}
                >Login</button>
            </div>
        </form>
        <br></br>
        <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login