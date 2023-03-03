import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header className='d-flex bg-info'>
            <span className='fw-bold fs-3'>Cirulla</span>
            <Link to={'/'}>Nuova partita</Link>

        </header>
    );
}

export default NavBar;