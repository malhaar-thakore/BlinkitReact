
import './App.css';
import './styles/style.css';
import Header from './components/Header';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import MainContentDetails from './components/organisms/mainContentDetails';
import Cart from './components/molecules/cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
        <Fragment>
          <Header />
          <NavigationBar />
          <MainContentDetails />   
        </Fragment>}/>
        
        <Route path='cart' element={
          <Cart />
        }/>

      </Routes>
    </div>
  );
}

export default App;
