function TurnSetInputCheckbox(props) {

    const { id, amount, pointSelf, updatePointSelf, pointOther, updatePointOther } = { ...props };

    return (
        <input className="form-check-input" type="checkbox" id={id} onClick={(e) => {
            checkDisable(e, amount, id, pointSelf, updatePointSelf, pointOther, updatePointOther);
        }} />
    );
}

function checkDisable(e, amount, id, pointSelf, updatePointSelf, pointOther, updatePointOther) {

    const thisInput = e.target;
    const otherInput = document.getElementById(`${id.split('-')[0]}-${id.endsWith('1') ? '2' : '1'}`);

    if (thisInput.checked)
        updatePointSelf(pointSelf + amount);
    else
        updatePointSelf(pointSelf - amount);

    if (thisInput.checked && otherInput.checked) {
        otherInput.checked = false;
        updatePointOther(pointOther - amount);
    }

}

export default TurnSetInputCheckbox;