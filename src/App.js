import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { RecoilRoot, useRecoilState } from 'recoil';
import Header from "./Components/Header";
// import Login from './Components/Login';
// import {login} from './Components/common/FormData'
const EditBrands = lazy(() => import("./Components/EditBrands"));
const BrandList = lazy(() => import("./Components/BrandList"));
const NewBrand = lazy(() => import("./Components/NewBrand"));
const Login = lazy(() => import("./Components/Login"));
function App() {
  // const [user,setUser]=useRecoilState(login)
  return (
    // <RecoilRoot>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />

        <Routes>
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path="/" element={<BrandList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newbrand" element={<NewBrand />} />
          <Route path="/edit" element={<EditBrands />} />
        </Routes>
      </Suspense>
    </Router>
    // </RecoilRoot>
  );
}

export default App;
