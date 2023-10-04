import './Home.css';

const Home = ({news, setNews}) => {
   return <div>
        <ul className="news-list">
        {news.map((item) => <li 
        className='li-news'
        key={item.id}>
          <p><strong>{item.newsTitle}</strong></p>
          <span>{item.theNews}</span>
        </li>)}
      </ul>
    </div>
}; 
export default Home;