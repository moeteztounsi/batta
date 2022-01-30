import batta102 from '../../Images/batta102.png';
import axios from 'axios';
import './LandingScreen.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
const LandingScreen = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const submitHandler = async(e)=>{
        e.preventDefault();
        
        try{
            const config ={
                headers:{
                    "Content-Type": "application/json"
                }
            }
            setLoading(true);

            const {data}  = await axios.post('http://localhost:7500/api/users/login', {email, password}, config);

            console.log(data);
            localStorage.setItem("ueseInfo", JSON.stringify(data));
            setLoading(false);

        }catch(error){
            setError(error.response.data.message);
            setLoading(false);

        }
    }

  
    return(
        <div>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading/>}  
            <div className="leftHalf"> 
                <img src ={batta102} className="image-container"/>
            </div>
            <div className="rightHalf"> 
                <form onSubmit={submitHandler}>
                    <div className="modal-dialog" role="document" style={{"display":"flex"}}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign In</h5>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <fieldset  style={{maxWidth:500 , marginLeft:20}}> 
                                        <div className="form-group" style={{marginTop :25}}>
                                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                            value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                        </div>
                                        <div className="form-group" style={{marginTop :1}}>
                                            <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                            value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <Link to ="/register" style={{marginRight:10}}>
                                    Don't have an account?
                                </Link>
                                <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" >
                                    Log In
                                </button>

                            </div>
                        </div>
                    </div>  
                </form>
            </div>
        </div>
    );
};


export default LandingScreen;