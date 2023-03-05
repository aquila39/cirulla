import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header className='d-flex bg-info justify-content-between px-3 justify-content-md-around align-items-center py-1'>
            <Link to={'/'} className={'text-decoration-none fw-bold fs-3 mb-0'}>Cirulla</Link>

            <Link to={'/newgame'} className={'text-decoration-none fw-bold fs-3 fst-italic'}>Nuova partita</Link>

        </header>
    );
}

export default NavBar;