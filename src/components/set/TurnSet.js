import TurnSetRow from "./TurnSetRow";
import TurnSetInputNumber from "./TurnSetInputNumber";

function TurnSet() {

    return (
        <div className="container-fluid">
            <TurnSetRow
                col1={<TurnSetInputNumber number={0} />}
                col2={'SCOPE'}
                col3={<TurnSetInputNumber number={0} />}
            />
        </div>
    );
}

export default TurnSet;