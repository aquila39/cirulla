import useFetch from './utility/Fetch';
import { Link } from "react-router-dom";
import vs_logo from '../img/VS_logo.png';
import { URL_HISTORY } from './utility/URL';

function History() {

    const { data, isPending, error } = useFetch(URL_HISTORY);

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && data.map(match => (

                <Link to={'/history/' + match.id} key={match.id} className={'d-flex border text-center m-3 py-2 px-4 justify-content-center align-items-center fs-4 text-decoration-none'}>
                    <div className='me-auto d-lg-inline-flex'>
                        <p>{match.nameA}</p>
                        <p className='ms-lg-5'>{match.pointA}</p>
                    </div>

                    <img src={vs_logo} alt='vs icon' className='mx-5' height='75px' />

                    <div className='ms-auto d-lg-inline-flex flex-row-reverse'>
                        <p>{match.nameB}</p>
                        <p className='me-lg-5'>{match.pointB}</p>
                    </div>
                </Link>

            ))}
        </div>
    );
}

export default History;