import { useParams } from "react-router-dom";
import useFetch from './utility/Fetch';
import { URL_HISTORY } from './utility/URL';

function HistoryDetail() {
    const { gameId } = useParams();
    const { data: game, isPending, error } = useFetch(`${URL_HISTORY}/${gameId}`);

    return (
        <div>
            {error && <div className='fs-1 text-center'>Match not found!</div>}
            {isPending && <div>Loading...</div>}
            {game &&
                <div>
                    <p>{game.id}</p>
                    <p>{game.nameA}</p>
                    <p>{game.nameB}</p>
                    <p>{game.pointA}</p>
                    <p>{game.pointB}</p>
                </div>
            }
        </div>
    );
}

export default HistoryDetail;