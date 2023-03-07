import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import Modal from '../Modal';
import Scoreboard from './scoreboard/Scoreboard';
import TurnSet from './set/TurnSet';
import { URL_HISTORY, URL_NEXT_ID } from './utility/URL';

function Game(props) {

    const state = useLocation().state;
    const navigate = useNavigate();

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

            <button type="button" className='btn btn-primary border border-dark mb-3 me-2' data-bs-toggle="modal" data-bs-target="#newModal">
                Nuovo turno
            </button>

            <div>
                <button type="button" className='btn btn-danger border border-dark mb-5 me-2' data-bs-toggle="modal" data-bs-target="#deleteModal">
                    ELIMINA
                </button>

                <button type="button" className='btn btn-secondary border border-dark mb-5 me-2' data-bs-toggle="modal" data-bs-target="#resetModal">
                    RESET
                </button>

                <button type="button" className='btn btn-success border border-dark mb-5 me-2' data-bs-toggle="modal" data-bs-target="#saveModal">
                    SALVA
                </button>
            </div>

            <Modal
                id={'deleteModal'}
                title={'Conferma'}
                body={'Vuoi davvero eliminare la partita?'}
                cancelText={'Annulla'}
                confirmColor={'danger'}
                confirmText={'Elimina'}
                confirmFunction={() => deleteMatch(gameId)}
            />

            <Modal
                id={'resetModal'}
                title={'Conferma'}
                body={'Vuoi davvero resettare il punteggio?'}
                cancelText={'Annulla'}
                confirmColor={'danger'}
                confirmText={'Reset'}
                confirmFunction={() => {
                    setPointA(0);
                    setPointB(0);
                }}
            />

            <Modal
                id={'saveModal'}
                title={'Conferma'}
                body={'Vuoi davvero salvare la partita?'}
                cancelText={'Annulla'}
                confirmColor={'success'}
                confirmText={'Salva'}
                confirmFunction={() => setStatus('end')}
            />

            <Modal
                id={'newModal'}
                title={'Nuovo turno'}
                body={<TurnSet />}
                cancelText={'Annulla'}
                confirmColor={'success'}
                confirmText={'Salva'}
                confirmFunction={() => setStatus('end')}
            />

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

async function deleteMatch(id) {
    const res = await fetch(`${URL_HISTORY}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });

    const json = await res.json();

    return json;
}

async function getNextId() {
    const response = await fetch(URL_NEXT_ID);
    const json = await response.json();

    return json[0].id + 1;
}

export default Game;