function TurnSetRow(props) {

    const { col1, col2, col3 } = { ...props };

    return (
        <div className="row">
            <div className="col-4 ms-auto">{col1}</div>
            <div className="col-4 ms-auto">{col2}</div>
            <div className="col-4 ms-auto">{col3}</div>
        </div>
    );
}

export default TurnSetRow;