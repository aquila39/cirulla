import { useState } from 'react';
import { useLocation } from 'react-router-dom'

function Game() {

    const location = useLocation().state;
    const [pointA, setPointA] = useState(0);
    const [pointB, setPointB] = useState(0);

    if (location == null)
        return (
            <h1>Invalid!</h1>
        );

    const team1 = location.firstTeam;
    const team2 = location.secondTeam;

    return (
        <main className="text-center mt-3">

            <h1>Cirulla - Partita</h1>

            <div className="d-flex mt-3 text-light fs-1 text-uppercase">
                <div className="col-6">
                    <p>{team1}</p>
                    <span>{pointA}</span>
                </div>

                <div className="col-6 ">
                    <p>{team2}</p>
                    <span>{pointB}</span>
                </div>

            </div>

            <div className="mx-auto col-3">
                <label htmlFor="rangeA" id="rangeA-text" className="form-label">0</label>
                <input type="range" className="form-range" min="0" max="51" step="1" id="rangeA" onInput={(x) => updateRangeVal("rangeA-text", x.target.value)} />
            </div>

        </main>
    );
}

function updateRangeVal(rangeId, newVal) {
    document.getElementById(rangeId).innerHTML = newVal;
}

export default Game;