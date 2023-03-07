function TurnSetInputSelect(props) {

    const { allowedDisable } = { ...props }
    return (
        <input className="form-check-input" name="radioCards" type="checkbox" onClick={(e) => disable(e, allowedDisable)} />
    );
}

function disable(e, allowedDisable) {

    const input = e.target;
    console.log(input)

    if (input.checked)
        input.checked = false;
}

export default TurnSetInputSelect;