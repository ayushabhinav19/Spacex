import './App.css';
import { Homepage } from './Homepage/Combiner/combiner';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Detailpage } from './Detailpage/detailbody/Detailpage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/details/:id" element={<Detailpage></Detailpage>} />
      </Routes>
    </>
  );
}

export default App;
