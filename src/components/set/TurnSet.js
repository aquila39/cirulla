import TurnSetRow from "./TurnSetRow";
import TurnSetInputNumber from "./TurnSetInputNumber";
import TurnSetInputSelect from "./TurnSetInputSelect";

function TurnSet() {

    return (
        <div className="container-fluid">
            <TurnSetRow
                col1={'Squadra A'}
                col2={''}
                col3={'Squadra B'}
            />

            <TurnSetRow
                col1={<TurnSetInputNumber number={0} />}
                col2={'SCOPE'}
                col3={<TurnSetInputNumber number={0} />}
            />

            <TurnSetRow
                col1={<TurnSetInputNumber number={0} />}
                col2={'+10'}
                col3={<TurnSetInputNumber number={0} />}
            />

            <TurnSetRow
                col1={<TurnSetInputSelect />}
                col2={'CARTE'}
                col3={<TurnSetInputSelect />}
            />
        </div>
    );
}

export default TurnSet;