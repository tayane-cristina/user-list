import './RegistrationPage.css';
import Button from '@mui/material/Button';

const RegistrationPage = ({newsTitle, setNewsTitle, theNews, setTheNews, news, setNews, url}) => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const News = {
            newsTitle,
            theNews,
        }

        const res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(News),
          });
      
          const addNews = await res.json();

        setNews((previousNews) => [...previousNews, addNews])

        setNewsTitle('')
        setTheNews('')
    }

    
 
    return <div className="registration-page" >
        <h1>Criar cadastro</h1>
        <div>
            <form onSubmit={handleSubmit} className="registration-form">
                <label> Título:
                    <input 
                        onChange={(e) => setNewsTitle(e.target.value)}
                        className='registration-infor'
                        type="text">
                    </input>
                </label>
                <label> Notícia:
                    <textarea 
                        onChange={(e) => setTheNews(e.target.value)}
                        id="registratio-text" 
                        name="news" 
                        rows="10" 
                        cols="50"
                        >
                    </textarea>
                </label>
                <Button type={'submit'} variant="contained">Contained</Button>
            </form>
        </div>
    </div>
};
export default RegistrationPage