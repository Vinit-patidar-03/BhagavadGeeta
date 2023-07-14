import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Chapters from './pages/Chapters';
import ChapterDetails from './pages/ChapterDetails';

function App() {
  return (
    <>
    <Router>
         <Navbar />
         <Routes>
          <Route exact path='/' element={<Chapters/>}/>
          <Route path='/chapter/:CNO' element={<ChapterDetails />} />
         </Routes>
         </Router>
         
    </>
  );
}

export default App;
