import { useLocation } from 'react-router-dom'

function Game() {

    const location = useLocation().state;

    if (location == null)
        return (
            <h1>Invalid!</h1>
        );

    const team1 = location.firstTeam;
    const team2 = location.secondTeam;

    return (
        <main>
            <h1>Cirulla - Partita</h1>
            <div className="d-flex">
                <div className="col-6">
                    {team1}
                </div>

                <div className="col-6">
                    {team2}
                </div>

            </div>
        </main>
    );
}

export default Game;