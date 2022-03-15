import Header from './components/Header';
import PadsContainer from './components/PadsContainer';
import audioData from './data/audiometa.json';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PadsContainer data={audioData} />
    </div>
  );
}

export default App;
