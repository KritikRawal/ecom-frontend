import logo from './logo.svg';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FurnitureRouter from './FurnitureRouter/furnitureRouter';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <FurnitureRouter/>
    </BrowserRouter>
  );
}

export default App;
