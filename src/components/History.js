import useFetch from './utility/Fetch';

function History() {
    const url = 'http://principessedisney.duckdns.org:8000/api/games';

    const { data, isPending, error } = useFetch(url);

    return (
        <div>
            <p>Ciao1 </p>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data}
            <p>Ciao</p>
        </div>
    );
}

export default History;