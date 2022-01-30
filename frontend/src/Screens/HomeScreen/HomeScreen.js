
import auction1 from '../../Images/auction1.png'
import {useState} from 'react';
import './HomeScreen.css'
import {Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const HomeScreen = ()=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const [name, setName] = useState("");
    const [price, setPrice] = useState(null);
    const [deadline, setDeadLine] = useState("");
    const [description, setDescription] = useState("");

    const [img, setImg] = useState("");

    const [imgMessage, setImgMessage] = useState(null);
    const [error, setError] = useState(false);


    const handleSubmit = async(e)=>{

        e.preventDefault();

        try{
            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            }

            const {data} = await axios.post("http://localhost:7500/api/users/posts",
            {name, img, deadline, price, description}, 
            config
            );

            console.log(data);

        }catch(error){
            console.log(error.response.data.message);
        }
    };


    const postDetails = (pic)=>{

        if(!pic){
            return setImgMessage('Please select a picture');
        }

        setImgMessage(null);

        if(pic.type === 'images/jpeg' || pic.type==='image/png'){
            const data = new FormData();
            data.append('file', pic);
            data.append('upload_preset', 'battta');
            data.append('cloud_name', 'ChkounZed');
            fetch("https://api.cloudinary.com/v1_1/ChkounZed/upload", {
                method: 'post',
                body: data
            })
            .then((res)=> res.json())
            .then((data)=> {
                console.log(data);
                setImg(data.url.toString())
            })
            .catch((error)=>{
                console.log(error);
            });
        }else{
            return setImgMessage('Please select a picture');
        }
    };


    
    return(
        <div className="container bg">
            <img src ={auction1} className='landing-image' />
            <div style={{marginLeft:460}}> 
                <Button variant="primary" onClick={handleShow}>
                    Create Post
                </Button>
            </div> 
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form >
                            <div className="form-group">
                                <label>Post Name:</label>
                                <input type="text" className="form-control" placeholder="Enter Name"
                                value={name} onChange={(e)=> setName(e.target.value)}/>
                            </div>

                            <div className="form-group">
                                <label>Post Images:</label>
                                <input type="file" className="form-control" multiple onChange="readURL(this)" accept="Image/*" 
                                onChange={(e)=> postDetails(e.target.files[0])}/>
                            </div>

                            <div>
                                <label>Price:</label>
                                <input type="number" className="form-control" placeholder="TND"
                                value={price} onChange={(e)=> setPrice(e.target.value)}/>
                            </div>
                            <div>
                                <label>DeadLine:</label>
                                <input type="datetime-local" className="form-control"
                                value={deadline} onChange={(e)=> setDeadLine(e.target.value)}/>
                            </div>
                            <div>
                                <label>Description:</label>
                                <textarea className="form-control" rows="3"
                                value={description} onChange={(e)=> setDescription(e.target.value)}/>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClose} >
                            Save Post
                        </button>
                        <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )

};

export default HomeScreen;