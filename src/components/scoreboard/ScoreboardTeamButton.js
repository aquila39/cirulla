function ScoreboardTeamButton(props) {

    const { colorType, functionOperation, lbl } = { ...props };

    return (
        <button type='button' className={`btn btn-${colorType} m-2 py-1 border border-dark fs-2`} onClick={functionOperation}>{lbl}</button>
    );
}

export default ScoreboardTeamButton;