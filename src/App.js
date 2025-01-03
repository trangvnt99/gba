import MainMember from './view/mainMember.js';
import Main from './view/main.js';
import MainGBA from './view/mainGBA.js';
import Main_1 from './view/main_1/main_1.js';
import MainDetail from './view/main_detail/main_detail.js';
import './App.css';
import {
  Link,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/main">Main</Link>
        <br />
        <Link to="/main_member">Main_member</Link>
        <br />
        <Link to="/main_GBA">Main_GBA</Link>
        <br />
        <Link to="/main_1">main_1</Link> 
        <br />
        <Link to="/productdetail">MainDetail</Link> 
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/main_member" element={<MainMember />} />
          <Route path="/main_GBA" element={<MainGBA />} />
          <Route path="/main_1" element={<Main_1 />} /> 
          <Route path="/productdetail" element={<MainDetail />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
