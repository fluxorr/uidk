import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Design1 from './components/des1/Design1';

import Home from './components/Home';
import Design2 from './components/des2/Design2';
import Designn from './components/des8/designn';
import Des3 from './components/des3/Des3';
import Design4 from './components/design4/Design4';
import Design5 from './components/design5/Design5';
import './App.css'


function App() {

  return (<div>

    <BrowserRouter>


      <Routes>

        <Route path="/uidk/" element={<Home />} />
        <Route path="/uidk/design1" element={<Design1 />} />
        <Route path="/uidk/design2" element={<Design2 />} />
        <Route path="/uidk/design3" element={<Des3 />} />
        <Route path="/uidk/design4" element={<Design4 />} />
        <Route path="/uidk/design5" element={<Design5 />} />
        <Route path="/uidk/design8" element={<Designn />} />

      </Routes>

    </BrowserRouter>
  </div >
  )
}

export default App
