import MainMember from './view/mainMember.js';
import Main from './view/main.js';
import MainGBA from './view/mainGBA.js';
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
        <Routes>
          <Route path="/main" exact element={<Main />} />
          <Route path="/main_member" element={<MainMember />} />
          <Route path="/main_GBA" element={<MainGBA />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
