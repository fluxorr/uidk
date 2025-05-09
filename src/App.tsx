import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Design1 from './components/des1/Design1';

import Home from './components/Home';
import Design2 from './components/des2/Design2';


function App() {

  return (<div>

    <BrowserRouter>


      <Routes>

        <Route path="/uidk/" element={<Home />} />
        <Route path="/uidk/design1" element={<Design1 />} />
        <Route path="/uidk/design2" element={<Design2 />} />

      </Routes>

    </BrowserRouter>
  </div >
  )
}

export default App
