import useFetch from './utility/Fetch';
import { Link } from "react-router-dom";

function History() {
    const url = 'http://principessedisney.duckdns.org:8000/api/games';

    const { data, isPending, error } = useFetch(url);

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && data.map(match => (

                <Link to={'/history/' + match.id} key={match.id} className={'d-flex m-3 border'}>
                    <div className='d-flex align-self-center my-0 mx-5 me-auto'>
                        <p>{match.nameA}</p>
                        <p>{match.pointA}</p>
                    </div>

                    <div className='d-flex align-self-center my-0 mx-5 ms-auto'>
                        <p>{match.nameB}</p>
                        <p>{match.pointB}</p>
                    </div>
                </Link>

            ))}
        </div>
    );
}

export default History;