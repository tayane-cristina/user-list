import './Home.css';

const Home = ({news}) => {

   return <div>
     <ul>
          {news.map((item) => <li key={item.id}>
            <p><strong>{item.newsTitle}</strong></p>
            <span>{item.theNews}</span>
          </li>)}
        </ul>
    </div>
}; 
export default Home;