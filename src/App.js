import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Summery from './components/Summery';
import Error from './components/Error';
import Form from './components/Form';
import BookedDetails from './components/BookedDetails';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/tvmazemovie" element={<Home/>}/>
          <Route path="/tvmazemovie/summery/:id" element={<Summery/>}/>
          <Route path="/tvmazemovie/form/:id" element={<Form/>}/>
          <Route path="/tvmazemovie/bookingdetail" element={<BookedDetails/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </>
   
  );
}

export default App;
