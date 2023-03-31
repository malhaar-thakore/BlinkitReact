import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import MainContentDetails from './components/organisms/mainContentDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <MainContentDetails />
    </div>
  );
}

export default App;
