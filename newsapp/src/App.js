import './App.css';
import { useState, useEffect } from 'react';
import NewsList from './components/NewsList';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://api.hnpwa.com/v0/news.json')
      .then(res => res.json())
      .then(json => {
        setNews(json);
      });
  });

  return (
    <div className="App">
      뉴스 앱 연습
      <NewsList news={news}></NewsList>
    </div>
  );
}

export default App;
