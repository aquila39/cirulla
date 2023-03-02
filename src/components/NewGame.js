import { useNavigate } from "react-router-dom";

function NewGame() {

    const navigate = useNavigate();

    return (
        <main className="text-center mx-auto">
            <h1 className="text-uppercase fw-bold fs-1">Cirulla</h1>
            <img src="/public/icon.webp" className="rounded d-block" alt="Cirulla icon" />
            <button className="btn btn-primary" type="submit">Nuova partita</button>

            <div className="d-flex mx-auto w">
                <div className="col-3">
                    <label htmlFor="firstName" className="form-label">Nome Team A</label>
                    <input type="text" id="firstName" className="form-control" required />
                    <div id="firstNameError" className="form-text text-danger" hidden>Il campo non può essere vuoto!</div>
                </div>

                <div className="col-3">
                    <label htmlFor="secondName" className="form-label">Nome Team B</label>
                    <input type="text" id="secondName" className="form-control" />
                    <div id="secondNameError" className="form-text text-danger" hidden>Il campo non può essere vuoto!</div>
                </div>

            </div>

            <button className="btn btn-primary" type="submit" onClick={() => {
                let valid = true;

                const first = document.getElementById("firstName").value;
                const second = document.getElementById("secondName").value;


                const firstError = document.getElementById("firstNameError");
                const secondError = document.getElementById("secondNameError");

                if (first.trim() === "") {
                    firstError.hidden = false;
                    valid = false;
                } else
                    firstError.hidden = true;

                if (second.trim() === "") {
                    secondError.hidden = false;
                    valid = false;
                } else
                    secondError.hidden = true;


                if (valid) {

                    navigate("/game", { state: { firstTeam: first, secondTeam: second } });
                }

            }}>Avvia!</button>

        </main >
    );
}

export default NewGame;