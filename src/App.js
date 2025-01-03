import MainMember from './view/mainMember.js';
import MainOrganization from './view/mainOrganization.js';
import MainIASR from './view/mainIASR.js';
import MainItems from './view/mainItems.js';
import MainGBA from './view/mainGBA.js';
import MainFood from './view/mainFood.js';


import Wto from './view/Organization/wto.js';
import GT from './view/Organization/gt.js';
import EVFTA from './view/Organization/evfta.js';
import CPTPP from './view/Organization/cptpp.js';
import AFTA from './view/Organization/afta.js';

import ChauAu from './view/member/chauau.js';
import AnhQuoc from './view/member/anhquoc.js';
import Canada from './view/member/canada.js';
import DaiLoan from './view/member/dailoan.js';
import HanQuoc from './view/member/hanquoc.js';
import Nga from './view/member/nga.js';
import NhatBan from './view/member/nhatban.js';
import Singapore from './view/member/singapore.js';
import TheUs from './view/member/theus.js';
import TrungQuoc from './view/member/trungquoc.js';
import Ando from './view/member/ando.js'

  //food
import Drink from './view/food/drink/drinks.js'
import Drinks from './view/food/drink/assorted-drinks.js'
import Tea from './view/food/drink/tea.js'

import SeaFood from './view/food/sea-food/seafood.js';

import Flour from './view/food/spice/flour.js';
import RawSpices from './view/food/spice/raw-spices.js';
import Spice from './view/food/spice/spice.js';

import Cashew from './view/food/cereals-and-grains/cashew.js';
import Seed from './view/food/cereals-and-grains/seed.js';
import SpecialtyCereals from './view/food/cereals-and-grains/specialty-cereals.js';
import NguCocHat from './view/food/cereals-and-grains/ngucoc-hat.js';

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

        <Link to="/main_IASR">Main_IASR</Link>
        <br />

        <Link to="/main_Item">Main_items</Link>
        <br />

        <Link to="/main_GBA">Main_GBA</Link>
        <br />

        <Link to="/main_food">Main_Food</Link>
        <br />


        <br />
        <Link to="/main_1">main_1</Link> 
        <br />
        <Link to="/productdetail">MainDetail</Link> 
        <Routes>
 
          //main
          <Route path="/main_IASR" element={<MainIASR />} />
          <Route path="/main_Item" element={<MainItems />} />
          <Route path="/main_GBA" element={<MainGBA />} />


          //to chuc
          <Route path="/main" element={<MainOrganization />} />
          <Route path="/main/wto" element={<Wto />} />
          <Route path="/main/gt" element={<GT />} />
          <Route path="/main/evfta" element={<EVFTA />} />
          <Route path="/main/cptpp" element={<CPTPP />} />
          <Route path="/main/afta" element={<AFTA />} />

          //thanh vien
          <Route path="/main_member" element={<MainMember />} />
          <Route path= "/main_member/nhatban" element={<NhatBan />} />
          <Route path= "/main_member/chauau" element={<ChauAu />} />
          <Route path= "/main_member/singapore" element={<Singapore />} />
          <Route path= "/main_member/anhquoc" element={<AnhQuoc />} />
          <Route path= "/main_member/trungquoc" element={<TrungQuoc />} />
          <Route path= "/main_member/canada" element={<Canada />} />
          <Route path= "/main_member/dailoan" element={<DaiLoan />} />
          <Route path= "/main_member/hanquoc" element={<HanQuoc />} />
          <Route path= "/main_member/theus" element={<TheUs />} />
          <Route path= "/main_member/nga" element={<Nga />} />
          <Route path= "/main_member/ando" element={<Ando />} />

          //food
          <Route path="/main_Food" element={<MainFood />} />
          <Route path= "/main_food/thuc_uong" element={<Drink />} />
          <Route path= "/main_food/haisan" element={<SeaFood />} />
          <Route path= "/main_food/thucuong_tonghop" element={<Drinks />} />
          <Route path= "/main_food/tra" element={<Tea />} />
          <Route path= "/main_food/bot" element={<Flour />} />
          <Route path= "/main_food/giavi_tho" element={<RawSpices />} />
          <Route path= "/main_food/giavi" element={<Spice />} />
          <Route path= "/main_food/hatdieu" element={<Cashew />} />
          <Route path= "/main_food/hat" element={<Seed />} />
          <Route path= "/main_food/ngucoc_dacsan" element={<SpecialtyCereals />} />
          <Route path= "/main_food/ngucoc_hat" element={<NguCocHat />} />


          <Route path="/main_1" element={<Main_1 />} /> 
          <Route path="/productdetail" element={<MainDetail />} /> 
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
