import { useState } from "react";

function TurnSetInputNumber(props) {

    const { amount, point, updatePoint } = { ...props };
    const [count, setCount] = useState(0)

    return (
        <span>
            <div className="input-group my-1">
                <label className="input-group-text cursor" onClick={() => {
                    if (count > 0) {
                        setCount(count - amount);
                        updatePoint(point - amount);
                    }
                }}>-</label>
                <input type="number" className="form-control text-center p-0" value={count} readOnly />
                <label className="input-group-text cursor" onClick={() => {
                    if (count < 100) {
                        setCount(count + amount);
                        updatePoint(point + amount);
                    }
                }}>+</label>
            </div>
        </span >
    );
}

export default TurnSetInputNumber;