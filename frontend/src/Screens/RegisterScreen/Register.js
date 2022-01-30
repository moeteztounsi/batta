
import {useState} from 'react';
import ErrorMessage from '../../Components/ErrorMessage';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useNavigate } from 'react-router-dom';

const Register = ()=>{
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const submitHandler = async(e)=>{
        e.preventDefault();

        if(password !== confirmPassword){
            setMessage("Please make sure your password match");
        }else{
            setMessage(null);
            try{
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                setLoading(true);

                const {data}  = await axios.post("http://localhost:7500/api/users/register",
                {name,email,password}, config);

                console.log(data);
                setLoading(false);
                localStorage.setItem("ueseInfo", JSON.stringify(data));
                

            }catch{
                setError(error.response.data.message);
                setLoading(false);
            }
        }
        
    };


    return(
        
        <div>
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {message && <ErrorMessage variant = "danger">{message}</ErrorMessage>}
            {loading && <Loading/>}  
            <form onSubmit={submitHandler}>
                <div className="modal-dialog" role="document" style={{"display":"flex"}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign Up</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <fieldset  style={{maxWidth:500 , marginLeft:20}}> 
                                    <div className="form-group">
                                        <label for="exampleInputText" className="form-label mt-4">Name</label>
                                        <input type="text" className="form-control" id="exampleInputText" placeholder="Enter Name"
                                        value={name} onChange={(e)=> setName(e.target.value)}/>
                                    </div>
                                    <div className="form-group" style={{marginTop :45}}>
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                        value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group" style={{marginBottom :1}}>
                                        <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                        value= {password} onChange={(e)=> setPassword(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1" className="form-label mt-4">Confim Password</label>
                                        <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Confirm Password"
                                        value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="modal-footer">
                        
                            <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">
                                Sign Up
                            </button>
                        
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    );

};

export default Register;