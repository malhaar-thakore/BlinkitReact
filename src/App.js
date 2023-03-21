import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import MainContent from './components/mainContents/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <MainContent />
    </div>
  );
}

export default App;
