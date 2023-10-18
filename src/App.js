import './App.css';
import 'swiper/css/bundle';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
