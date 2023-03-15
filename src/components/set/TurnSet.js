import TurnSetRow from "./TurnSetRow";
import TurnSetInputNumber from "./TurnSetInputNumber";
import TurnSetInputCheckbox from "./TurnSetInputCheckbox";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import vs_logo from '../../img/VS_logo.png'

function TurnSet() {

    const location = useLocation().state;

    const team1 = location.firstTeam;
    const team2 = location.secondTeam;

    const [point1, setPoint1] = useState(0);
    const [point2, setPoint2] = useState(0);

    return (
        <div className="container-fluid text-center">
            <TurnSetRow
                col1={team1}
                col2={<img src={vs_logo} alt='vs_icon' width='50px' />}
                col3={team2}
            />

            <hr className='mt-1' />

            <TurnSetRow
                col1={<TurnSetInputNumber
                    amount={1}
                    point={point1}
                    updatePoint={setPoint1}
                />}
                col2={'SCOPE'}
                col3={<TurnSetInputNumber
                    amount={1}
                    point={point2}
                    updatePoint={setPoint2}
                />}
            />

            <TurnSetRow
                col1={<TurnSetInputNumber
                    amount={10}
                    point={point1}
                    updatePoint={setPoint1}
                />}
                col2={'+10'}
                col3={<TurnSetInputNumber
                    amount={10}
                    point={point2}
                    updatePoint={setPoint2}
                />}
            />

            <hr />



            <TurnSetRow
                col1={<TurnSetInputCheckbox
                    id={'checkCards-1'}
                    amount={1}
                    pointSelf={point1}
                    updatePointSelf={setPoint1}
                    pointOther={point2}
                    updatePointOther={setPoint2}
                />}
                col2={'CARTE'}
                col3={<TurnSetInputCheckbox
                    id={'checkCards-2'}
                    amount={1}
                    pointSelf={point2}
                    updatePointSelf={setPoint2}
                    pointOther={point1}
                    updatePointOther={setPoint1}
                />}
            />

            <TurnSetRow
                col1={<TurnSetInputCheckbox
                    id={'checkDenari-1'}
                    amount={1}
                    pointSelf={point1}
                    updatePointSelf={setPoint1}
                    pointOther={point2}
                    updatePointOther={setPoint2}
                />}
                col2={'DENARI'}
                col3={<TurnSetInputCheckbox
                    id={'checkDenari-2'}
                    amount={1}
                    pointSelf={point2}
                    updatePointSelf={setPoint2}
                    pointOther={point1}
                    updatePointOther={setPoint1}
                />}
            />

            <TurnSetRow
                col1={<TurnSetInputCheckbox
                    id={'checkPrimiera-1'}
                    amount={1}
                    pointSelf={point1}
                    updatePointSelf={setPoint1}
                    pointOther={point2}
                    updatePointOther={setPoint2}
                />}
                col2={'PRIMIERA'}
                col3={<TurnSetInputCheckbox
                    id={'checkPrimiera-2'}
                    amount={1}
                    pointSelf={point2}
                    updatePointSelf={setPoint2}
                    pointOther={point1}
                    updatePointOther={setPoint1}
                />}
            />

            <TurnSetRow
                col1={<TurnSetInputCheckbox
                    id={'checkSettebello-1'}
                    amount={1}
                    pointSelf={point1}
                    updatePointSelf={setPoint1}
                    pointOther={point2}
                    updatePointOther={setPoint2}
                />}
                col2={'SETTEBELLO'}
                col3={<TurnSetInputCheckbox
                    id={'checkSettebello-2'}
                    amount={1}
                    pointSelf={point2}
                    updatePointSelf={setPoint2}
                    pointOther={point1}
                    updatePointOther={setPoint1}
                />}
            />

            <hr />

            <TurnSetRow
                col1={<TurnSetInputCheckbox
                    id={'checkGrande-1'}
                    amount={5}
                    pointSelf={point1}
                    updatePointSelf={setPoint1}
                    pointOther={point2}
                    updatePointOther={setPoint2}
                />}
                col2={'GRANDE'}
                col3={<TurnSetInputCheckbox
                    id={'checkGrande-2'}
                    amount={5}
                    pointSelf={point2}
                    updatePointSelf={setPoint2}
                    pointOther={point1}
                    updatePointOther={setPoint1}
                />}
            />

            <TurnSetRow
                col1={<TurnSetInputNumber
                    amount={1}
                    point={point1}
                    updatePoint={setPoint1}
                />}
                col2={'PICCOLA'}
                col3={<TurnSetInputNumber
                    amount={1}
                    point={point2}
                    updatePoint={setPoint2}
                />}
            />

            <hr />
            <hr />

            <TurnSetRow
                col1={<span id='turnSetPointA' className='fs-5'>{point1}</span>}
                col2={null}
                col3={<span id='turnSetPointB' className='fs-5'>{point2}</span>}
            />

        </div>
    );
}

export default TurnSet;