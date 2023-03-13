import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";
import ModalTemplate from './ModalTemplate';
import Scoreboard from './scoreboard/Scoreboard';
import TurnSet from './set/TurnSet';
import { URL_HISTORY } from './utility/URL';
import { checkWinner, getNextId } from './utility/Utility';

function Game() {

    let state = useLocation().state;
    const navigate = useNavigate();

    if (state === null) {
        state = {};
    }

    const [gameId, setGameId] = useState(state.gameId);
    const [pointA, setPointA] = useState(state.firstPoint);
    const [pointB, setPointB] = useState(state.secondPoint);
    const [status, setStatus] = useState(state.status);
    const firstTeam = state.firstTeam;
    const secondTeam = state.secondTeam;

    // Modal
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalReset, setShowModalReset] = useState(false);
    const [showModalSave, setShowModalSave] = useState(false);
    const [showModalSet, setShowModalSet] = useState(false);


    useEffect(() => {
        if (gameId === undefined) {
            navigate('/newgame');
            return;
        }

        async function create() {
            setGameId(await createMatch(firstTeam, secondTeam));
        }

        if (gameId === -1)
            create();

    }, [gameId]);

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
            await updateMatch(gameId, firstTeam, secondTeam, pointA, pointB, status);
        }

        update();

    }, [pointA, pointB, status]);

    return (
        <main className='text-center table pt-3'>

            <h1><b>Cirulla - Partita</b></h1>

            <Scoreboard
                teamA={firstTeam}
                teamB={secondTeam}
                pointA={pointA}
                pointB={pointB}
                setPointA={setPointA}
                setPointB={setPointB}
            />

            <Button className='border border-dark mb-3 me-2' variant="primary" onClick={() => setShowModalSet(true)}>
                Nuovo turno
            </Button>

            <div>
                <Button className='border border-dark mb-3 me-2' variant="danger" onClick={() => setShowModalDelete(true)}>
                    ELIMINA
                </Button>

                <Button className='border border-dark mb-3 me-2' variant="secondary" onClick={() => setShowModalReset(true)}>
                    RESET
                </Button>

                <Button className='border border-dark mb-3 me-2' variant="success" onClick={() => setShowModalSave(true)}>
                    SALVA
                </Button>
            </div>

            <ModalTemplate
                show={showModalDelete}
                setShow={setShowModalDelete}
                id={'deleteModalTemplate'}
                title={'Conferma'}
                body={'Vuoi davvero eliminare la partita?'}
                cancelText={'Annulla'}
                confirmColor={'danger'}
                confirmText={'Elimina'}
                confirmFunction={async () => {
                    const res = await deleteMatch(gameId);
                    if (res.ok)
                        navigate('/newgame');
                    else console.error('Failed delete');
                }}
            />

            <ModalTemplate
                show={showModalReset}
                setShow={setShowModalReset}
                id={'resetModalTemplate'}
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

            <ModalTemplate
                show={showModalSave}
                setShow={setShowModalSave}
                id={'saveModalTemplate'}
                title={'Conferma'}
                body={'Vuoi davvero salvare la partita?'}
                cancelText={'Annulla'}
                confirmColor={'success'}
                confirmText={'Salva'}
                confirmFunction={() => {
                    setStatus('end');
                    setTimeout(() => navigate(`/history/${gameId}`), 100);
                }}
            />

            <ModalTemplate
                show={showModalSet}
                setShow={setShowModalSet}
                id={'newModalTemplate'}
                title={'Nuovo turno'}
                body={<TurnSet />}
                cancelText={'Annulla'}
                confirmColor={'success'}
                confirmText={'Salva'}
                confirmFunction={() => saveSet(pointA, setPointA, pointB, setPointB)}
            />

        </main>
    );
}

function saveSet(pointA, setPointA, pointB, setPointB) {
    const point1 = parseInt(document.getElementById('turnSetPointA').innerText);
    const point2 = parseInt(document.getElementById('turnSetPointB').innerText);

    setPointA(pointA + point1);
    setPointB(pointB + point2);
}

async function createMatch(nameA, nameB) {
    const match = { id: -1, nameA, nameB, pointA: 0, pointB: 0, status: 'in-progress' };

    match.id = await getNextId();

    const res = await fetch(URL_HISTORY, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(match)
    });

    const json = await res.json();

    return json.id;
}

async function updateMatch(id, nameA, nameB, pointA, pointB, status) {
    const match = { id, nameA, nameB, pointA, pointB, status };

    if (id === undefined || id === -1)
        return;

    const res = await fetch(`${URL_HISTORY}/${match.id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(match)
    });

    if (!res.ok)
        console.error(res.message);
}

async function deleteMatch(id) {

    const res = await fetch(`${URL_HISTORY}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });

    return res;
}

export default Game;