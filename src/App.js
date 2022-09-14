
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Error from './components/Error';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Admin from './components/Admin';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='/admin' element={<Admin />} />

      <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
