import logo from './logo.svg';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FurnitureRouter from './FurnitureRouter/furnitureRouter';
import Body from './Body/Body';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      {/* <Body/> */}
      <FurnitureRouter/>
    </BrowserRouter>
  );
}

export default App;
