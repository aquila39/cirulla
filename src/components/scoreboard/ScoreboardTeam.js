import ScoreboardTeamButton from "./ScoreboardTeamButton";

function ScoreboardTeam(props) {

    const { team, point, setPoint, lbl } = { ...props };

    return (

        <div className='col-6'>

            <p className='text-break'>{team}</p>
            <span id={lbl} className='fs-1'>{point}</span>

            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column col-6 col-md-3'>
                    <ScoreboardTeamButton
                        colorType='danger'
                        functionOperation={() => (
                            setPoint(point - 1))}
                        lbl='-1'
                    />
                </div>
                <div className='d-flex flex-column col-6 col-md-3'>
                    <ScoreboardTeamButton
                        colorType='success'
                        functionOperation={() => (
                            setPoint(point + 1))}
                        lbl='+1'
                    />
                </div>
            </div>
        </div>
    );
}

export default ScoreboardTeam;