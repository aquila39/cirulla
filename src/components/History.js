import useFetch from './utility/Fetch';
import { Link } from "react-router-dom";
import vs_logo from '../img/VS_logo.png';
import { URL_HISTORY } from './utility/URL';
import Loading from './utility/Loading';

function History() {

    const { data, isPending, error } = useFetch(`${URL_HISTORY}?_sort=id&_order=desc`);

    return (
        <div id='mainHistory'>
            {error && <div>{error}</div>}
            {isPending && <Loading />}
            {data && data.map(match => (

                <Link
                    to={match.status === "end" ? `/history/${match.id}` : '/game'}
                    state={{
                        gameId: match.id,
                        firstTeam: match.nameA,
                        secondTeam: match.nameB,
                        firstPoint: match.pointA,
                        secondPoint: match.pointB,
                        status: match.status
                    }}
                    key={match.id}
                    className={`d-flex border text-center m-3 py-2 px-4 justify-content-center align-items-center fs-4 text-decoration-none ${match.status === 'end' ? 'bg-success' : 'bg-warning blink-long'}`
                    }>

                    <div className='me-auto d-lg-inline-flex'>
                        <p className='text-break'>{match.nameA}</p>
                        <p className='ms-lg-5'>{match.pointA}</p>
                    </div>

                    <img src={vs_logo} alt='vs icon' className='mx-5' height='50rem' />

                    <div className='ms-auto d-lg-inline-flex flex-row-reverse'>
                        <p className='text-break'>{match.nameB}</p>
                        <p className='me-lg-5'>{match.pointB}</p>
                    </div>
                </Link>

            ))
            }
        </div>
    );
}

export default History;