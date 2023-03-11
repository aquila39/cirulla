import { Link } from 'react-router-dom';
import icon from '../img/icon.webp';

function Home() {

    return (
        <main className='text-center mx-auto pt-3'>
            <h1 className='text-uppercase fw-bold fs-1'>Cirulla</h1>

            <img src={icon} className='rounded d-block mx-auto img-fluid mb-4' alt='Cirulla icon' />

            <p>Premi il bottone per iniziare!</p>

            <Link to={'/newgame'} className={'btn btn-primary text-decoration-none'}>Nuova partita</Link>



        </main >
    );
}

export default Home;