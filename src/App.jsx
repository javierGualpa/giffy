import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Lists } from './components/Lists';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gif/:keyword' element={<Lists />} />
      </Routes>
    </BrowserRouter>




  );

}

export default App;

