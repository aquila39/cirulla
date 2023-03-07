import { useState } from "react";

function TurnSetRowNumber(props) {

    const { amount, point, updatePoint } = { ...props };
    const [count, setCount] = useState(0)

    return (
        <span>
            <div className="input-group">
                <label className="input-group-text cursor" onClick={() => {
                    if (count > 0) {
                        setCount(count - amount);
                        updatePoint(point - amount);
                    }
                }}>-</label>
                <input type="text" className="form-control text-center" value={count} disabled />
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

export default TurnSetRowNumber;