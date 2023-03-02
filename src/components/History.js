import useFetch from "./utility/Fetch";

function History() {

    const { data, isPending, error } = useFetch('');

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data}
        </div>
    );
}

export default History;