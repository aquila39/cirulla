import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import Scoreboard from './scoreboard/Scoreboard';
import { URL_HISTORY, URL_NEXT_ID } from './utility/URL';

function Game(props) {

    const state = useLocation().state;
    const navigate = useNavigate();

    console.log(state);
    console.log(props);

    const [gameId, setGameId] = useState(state.gameId);
    const [pointA, setPointA] = useState(state.firstPoint);
    const [pointB, setPointB] = useState(state.secondPoint);
    const [status, setStatus] = useState(state.status)

    useEffect(() => {
        const lblA = document.getElementById('lblPointA');
        const lblB = document.getElementById('lblPointB');

        if (lblA === null || lblB === null)
            return;

        if (pointA < 0 || pointA > 100)
            setPointA(0);

        if (pointB < 0 || pointB > 100)
            setPointB(0);

        const check = checkWinner(pointA, pointB);

        if (check === 1)
            lblA.classList.add('blink');
        else
            lblA.classList.remove('blink');

        if (check === 2)
            lblB.classList.add('blink');
        else
            lblB.classList.remove('blink');

        async function update() {
            setGameId(await updateMatch(gameId, state.firstTeam, state.secondTeam, pointA, pointB, status, setStatus));
        }

        update();


    }, [pointA, pointB, gameId, state.firstTeam, state.secondTeam, status]);

    if (state === null) {
        navigate('/newgame'); // TODO Warning and error
    }

    return (
        <main className='text-center table pt-3'>

            <h1>Cirulla - Partita</h1>

            <Scoreboard
                pointA={pointA}
                pointB={pointB}
                setPointA={setPointA}
                setPointB={setPointB}
            />

            <div>
                <button type="button" className='btn btn-danger border border-dark mb-5 me-2' onClick={() => {
                    setPointA(0);
                    setPointB(0);
                }}>RESET</button>
                <button type="button" className='btn btn-success border border-dark mb-5 me-2' onClick={() => {
                    setStatus('end');
                }}>SALVA</button>

            </div>
        </main>
    );
}

function checkWinner(pointA, pointB) {

    if (pointA < 51 && pointB < 51)
        return 0;

    if (pointA === pointB)
        return 3;

    if (pointA >= 51 && pointB < 51)
        return 1;

    if (pointA < 51 && pointB >= 51)
        return 2;

    return pointA > pointB ? 1 : 2;
}

async function updateMatch(id, nameA, nameB, pointA, pointB, status, setFun) {
    const match = { id, nameA, nameB, pointA, pointB, status };
    let type = 'PUT';

    console.log(status);
    if (status === 'start') {
        match.id = await getNextId();
        type = 'POST';
    }

    const res = await fetch(type === 'POST' ? URL_HISTORY : `${URL_HISTORY}/${match.id}`, {
        method: type,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(match)
    });

    const json = await res.json();

    if (status === 'start')
        setFun('in-progress');

    return json.id;
}

async function getNextId() {
    const response = await fetch(URL_NEXT_ID);
    const json = await response.json();

    return json[0].id + 1;
}

export default Game;