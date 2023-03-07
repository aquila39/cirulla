import { useState } from "react";

function TurnSetRowNumber(props) {

    const [count, setCount] = useState(props.number)

    return (
        <span>
            <div className="input-group">
                <label className="input-group-text cursor" onClick={() => setCount(count - 1)}>-</label>
                <input type="text" className="form-control text-center" value={count} disabled />
                <label className="input-group-text cursor" onClick={() => setCount(count + 1)}>+</label>
            </div>
        </span >
    );
}

export default TurnSetRowNumber;