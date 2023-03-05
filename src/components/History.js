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
                    <p>{match.nameA}: </p>
                    <p>{match.pointA} vs </p>
                    <p>{match.nameB}: </p>
                    <p>{match.pointB}</p>
                </Link>

            ))}
        </div>
    );
}

export default History;