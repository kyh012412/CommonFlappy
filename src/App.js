import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<>home</>}></Route>
        <Route path="path1" element={<>path1</>}></Route>
      </Routes>
    </div>
  );
}

export default App;
