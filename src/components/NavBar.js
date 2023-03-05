import { Link } from "react-router-dom";
import logo from '../img/icon.webp';

function NavBar() {
    return (
        <header className='d-flex bg-info justify-content-between px-3 justify-content-md-around align-items-center py-1'>
            <Link to={'/'} className={'text-decoration-none fw-bold fs-3 mb-0'}>
                <img src={logo} alt={'logo cirulla'} width={'50px'} className={'rounded me-2'} />
                Cirulla
            </Link>

            <Link to={'/history'} className={'text-decoration-none fw-bold fs-3'}>Storico</Link>

        </header>
    );
}

export default NavBar;