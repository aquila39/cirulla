import { useState } from "react";

function TurnSetInputPiccola(props) {

    const { side, point, updatePoint } = { ...props };
    const [count, setCount] = useState(0)

    return (
        <span>
            <div className="input-group my-1">
                <label className="input-group-text cursor" onClick={() => {
                    if (count === 3) {
                        setCount(0);
                        updatePoint(point - 3);
                    }
                    else if (count > 0) {
                        setCount(count - 1);
                        updatePoint(point - 1);
                    }
                }}>-</label>
                <input type="number" className="form-control text-center p-0" value={count} readOnly />
                <label className="input-group-text cursor" onClick={() => {
                    if (count === 0) {
                        setCount(3);
                        updatePoint(point + 3);
                    }
                    else if (count < 6) {
                        setCount(count + 1);
                        updatePoint(point + 1);
                    }
                }}>+</label>
            </div>
        </span >
    );
}

export default TurnSetInputPiccola;