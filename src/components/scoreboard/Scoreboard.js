import { useLocation } from 'react-router-dom'
import ScoreboardTeam from './ScoreboardTeam';

function Scoreboard(props) {

    const location = useLocation().state;
    const { pointA, pointB, setPointA, setPointB } = { ...props };

    const team1 = location.firstTeam;
    const team2 = location.secondTeam;

    return (
        <div className='d-flex mt-3 text-light fs-1 text-uppercase'>

            <ScoreboardTeam
                team={team1}
                point={pointA}
                setPoint={setPointA}
                lbl={'lblPointA'}
            />

            <ScoreboardTeam
                team={team2}
                point={pointB}
                setPoint={setPointB}
                lbl={'lblPointB'}
            />

        </div >
    );
}

export default Scoreboard;