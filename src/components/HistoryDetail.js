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
            {game && <>

                <h1 className='text-center my-2'>Resoconto partita</h1>
                <div className='container text-center border'>
                    <div className='row'>
                        {game.createdAt && <p className='text-center'>Partita giocata il {new Date(game.createdAt).toLocaleString()}</p>}
                    </div>

                    <div className='row'>
                        <div className='col pt-3'>
                            <p className='fs-3 text-wrap'>{game.nameA}</p>
                            <hr />
                            <p className='fs-3'>{game.pointA}</p>
                        </div>
                        <div className='col pt-3'>
                            <p className='fs-3 text-wrap'>{game.nameB}</p>
                            <hr />
                            <p className='fs-3'>{game.pointB}</p>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    );
}

export default HistoryDetail;