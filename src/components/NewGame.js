import { useNavigate } from 'react-router-dom';
import icon from '../icon.webp';

function NewGame() {

    const navigate = useNavigate();

    return (
        <main className='text-center mx-auto'>

            <h1 className='text-uppercase fw-bold fs-1'>Cirulla</h1>

            <img src={icon} className='rounded d-block mx-auto img-fluid mb-4' alt='Cirulla icon' />

            <div className='d-flex justify-content-around mx-auto my-3'>
                <div className='col-5 col-md-3 mx-2'>
                    <label htmlFor='firstName' className='form-label'>Nome Team A</label>
                    <input type='text' id='firstName' className='form-control' maxlength="20" autocomplete="off" required />
                    <div id='firstNameError' className='form-text text-danger' hidden>Il campo non può essere vuoto!</div>
                </div>

                <div className='col-5 col-md-3 mx-2'>
                    <label htmlFor='secondName' className='form-label'>Nome Team B</label>
                    <input type='text' id='secondName' className='form-control' maxlength="20" autocomplete="off" required />
                    <div id='secondNameError' className='form-text text-danger' hidden>Il campo non può essere vuoto!</div>
                </div>

            </div>

            <button className='btn btn-primary' type='submit' onClick={() => {
                let valid = true;

                const first = document.getElementById('firstName').value;
                const second = document.getElementById('secondName').value;


                const firstError = document.getElementById('firstNameError');
                const secondError = document.getElementById('secondNameError');

                if (first.trim() === '') {
                    firstError.hidden = false;
                    valid = false;
                } else
                    firstError.hidden = true;

                if (second.trim() === '') {
                    secondError.hidden = false;
                    valid = false;
                } else
                    secondError.hidden = true;


                if (valid) {

                    navigate('/game', { state: { firstTeam: first, secondTeam: second } });
                }

            }}>Nuova partita!</button>

        </main >
    );
}

export default NewGame;