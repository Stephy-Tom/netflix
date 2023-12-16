import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import Navigationbar from './components/Navigationbar'
import { requests } from './request';

function App() {
  return (
    <div >
     <Navigationbar/>
      <Banner fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="NetflixOriginals" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchURL={requests.fetchTrending}/>
      <Row title="Action" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Docummentaries" fetchURL={requests.fetchDocumentaries}/>
      
    
     
    </div>
  );
}

export default App;
