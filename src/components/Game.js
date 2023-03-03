import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import icon from '../icon.webp';

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

        lblA.innerHTML = pointA;
        lblB.innerHTML = pointB;

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

    const team1 = location.firstTeam;
    const team2 = location.secondTeam;

    return (
        <main className='text-center table'>

            <h1>Cirulla - Partita</h1>

            <img src={icon} className='rounded d-block mx-auto' alt='Cirulla icon' />

            <div className='d-flex mt-3 text-light fs-1 text-uppercase'>
                <div className='col-6'>
                    <p className='text-break'>{team1}</p>
                    <span id='lblPointA'>{pointA}</span>

                    <div className='d-flex justify-content-center'>
                        <div className='d-flex flex-column col-6 col-md-3'>
                            <button type='button' className='btn btn-danger m-2 p-3 border border-dark fs-2' onClick={() => {
                                setPointA(pointA - 1);
                            }}>-1</button>
                            <button type='button' className='btn btn-danger m-2 p-3 border border-dark fs-2' onClick={() => {
                                setPointA(pointA - 10);
                            }}>-10</button>
                        </div>
                        <div className='d-flex flex-column col-6 col-md-3'>
                            <button type='button' className='btn btn-success m-2 p-3 border border-dark fs-2' onClick={() => {
                                setPointA(pointA + 1);
                            }}>+1</button>
                            <button type='button' className='btn btn-success m-2 p-3 border border-dark fs-2' onClick={() => {
                                setPointA(pointA + 10);
                            }}>+10</button>
                        </div>
                    </div>
                </div>

                <div className='col-6'>
                    <p className='text-break'>{team2}</p>
                    <span id='lblPointB'>{pointB}</span>

                    <div className='d-flex justify-content-center'>
                        <div className='d-flex flex-column col-6 col-md-3'>
                            <button type='button' className='btn btn-danger m-2 p-3 border border-dark fs-2' onClick={() => {
                                setPointB(pointB - 1);
                            }}>-1</button>
                            <button type='button' className='btn btn-danger m-2 p-3 border border-dark fs-2' onClick={() => {
                                setPointB(pointB - 10);
                            }}>-10</button>
                        </div>
                        <div className='d-flex flex-column col-6 col-md-3'>
                            <button type='button' className='btn btn-success m-2 p-3 border border-dark fs-2' onClick={() => {
                                setPointB(pointB + 1);
                            }}>+1</button>
                            <button type='button' className='btn btn-success m-2 p-3 border border-dark fs-2' onClick={() => {
                                setPointB(pointB + 10);
                            }}>+10</button>
                        </div>
                    </div>

                </div>

            </div>

            <button type="button" className='btn btn-secondary mb-5' onClick={() => {
                setPointA(0);
                setPointB(0);
            }}>Reset</button>


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