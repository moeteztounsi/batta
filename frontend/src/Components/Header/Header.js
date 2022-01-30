
import {
    Navbar, 
    Container, 
    NavDropdown, 
    Nav, 
    Form, 
    FormControl, 
} from 'react-bootstrap';
import Batta from '../../Images/Batta.png';
import {Link, useNavigate} from 'react-router-dom';

const Header = ()=>{
    const navigate = useNavigate();

    return(
        <Navbar  expand="lg" bg="dark" variant="dark">
            <Container >
                <Link to ="/">
                    <img src={Batta} style={{width:100, backgroundColor:"inherit"}}/>
                </Link>
                <Navbar.Brand href="/">Chkoun ZED</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' ,marginLeft:30}}
                        navbarScroll
                        >
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav>
                <Form className="d-flex" style={{marginLeft:30}}>
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-1"
                        aria-label="Search"
                        style={{ height : '50px'}}
                        />
                    </Form>
                    <NavDropdown title="Links" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item onClick={()=>{localStorage.removeItem("userInfo");
                             navigate("/")}}>
                                Log Out
                            </NavDropdown.Item>
                          
                        </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;