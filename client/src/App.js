import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Landing from './Views/Landing Page/Landing';
import Home from './Views/Home/Home';
import Details from './Views/Detail/Detail';
import Form from './Views/Form/Form';
import Navbar from './Components/Navbar/Navbar';



function App() {
  const {pathname} = useLocation;
  return (
    <div className="App">
      <BrowserRouter>
      {/* {
        pathname !== '/'
          ? <div >
            <Navbar />
          </div>
          : ''
      } */}
      <Routes>
      <Route path={"/"} element={<Landing/>}></Route>
      <Route path={"/home"} element={<Home/>}></Route>
      <Route path={"/detail/:id"} element={<Details/>}></Route>
      <Route path={"/form"} element={<Form/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
