import trendingline from './assets/vector/Vectorline.png'
import trendingtxt from './assets/vector/trendingtxt.png'
import trendingbox from './assets/vector/Vectorbox.png'
import Cards from './components/Cards/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img className='trendingbox' src={trendingbox} />
        <img className='trendingline' src={trendingline} />
        <img className='trendingtxt' src={trendingtxt} />
      </div>
      <Cards />
    </div>
  );
}

export default App;
