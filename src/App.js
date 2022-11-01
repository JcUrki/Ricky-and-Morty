import './App.css';
import Character from './containers/Character/Character';
import MainPage from './containers/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <section id='general-container'>
      <Container id='general-light'/>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<MainPage />}/>
            <Route exact path='/search-a-character' element={<Character />}/>
          </Routes>
        </BrowserRouter>
    </section>
  );
}

export default App;
