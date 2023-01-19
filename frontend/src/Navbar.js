import { useContext } from 'react'
import { useNavigate } from "react-router";
import { CurrentUserContext } from './contexts/CurrentUser';

function Navbar() {

const { currentUser } = useContext(CurrentUserContext)

    const navigate = useNavigate  
    
   
    function logout() {
        currentUser(null);
        localStorage.removeItem('token');
        navigate(`/login`);
    }

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="/login" onClick={() => navigate("/login")}>
                    Login
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="/signup" onClick={() => navigate("/signup")}>
                    Signup
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <>
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
            <li style={{ float: 'right' }}>
                <a href="/login" onClick={logout} >
                    Logout
                </a>  
            </li>
           </>
        )
    }
    return(
            <div className='NavbarContainer'>
                <nav className='Navbar'>
                    <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#">About</a>
                    </li>
                    {loginActions}
                    </ul>
                </nav>
            </div>
    )

}


export default Navbar;