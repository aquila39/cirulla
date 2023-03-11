import ScoreboardTeam from './ScoreboardTeam';

function Scoreboard(props) {

    const { teamA, teamB, pointA, pointB, setPointA, setPointB } = { ...props };

    return (
        <div className='d-flex mt-3 text-light fs-1 text-uppercase'>

            <ScoreboardTeam
                team={teamA}
                point={pointA}
                setPoint={setPointA}
                lbl={'lblPointA'}
            />

            <ScoreboardTeam
                team={teamB}
                point={pointB}
                setPoint={setPointB}
                lbl={'lblPointB'}
            />

        </div >
    );
}

export default Scoreboard;