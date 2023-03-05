import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import icon from '../img/icon.webp';
import Scoreboard from './Scoreboard';

function Game() {

    const location = useLocation().state;
    const [pointA, setPointA] = useState(0);
    const [pointB, setPointB] = useState(0);

    useEffect(() => {
        const lblA = document.getElementById('lblPointA');
        const lblB = document.getElementById('lblPointB');

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

    }, [pointA, pointB]);


    if (location == null)
        return (
            <h1>Invalid!</h1>
        );

    return (
        <main className='text-center table pt-3'>

            <h1>Cirulla - Partita</h1>

            {/* <img src={icon} className='rounded d-block mx-auto' alt='Cirulla icon' /> */}

            <Scoreboard
                pointA={pointA}
                pointB={pointB}
                setPointA={setPointA}
                setPointB={setPointB}
            />

            <div>
                <button type="button" className='btn btn-danger mb-5 me-2' onClick={() => {
                    setPointA(0);
                    setPointB(0);
                }}>RESET</button>

                <button type="button" className='btn btn-primary mb-5 ms-2' onClick={() => {

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

export default Game;