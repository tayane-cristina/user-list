import './RegistrationPage.css';
import Button from '@mui/material/Button';

const RegistrationPage = () => {
    return <div className="registration-page" >
        <h1>Criar cadastro</h1>
        <div>
            <form className="registration-form">
                <label> Título:
                    <input 
                        className='registration-infor'
                        type="text">
                    </input>
                </label>
                <label> Notícia:
                    <textarea 
                        id="registratio-text" 
                        name="news" 
                        rows="10" 
                        cols="110"
                        >
                    </textarea>
                </label>
                <Button variant="contained">Contained</Button>
            </form>
        </div>
    </div>
};
export default RegistrationPage