import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import FormComponent from './Components/steps/FormComponent';
// import EditBrands from './Components/EditBrands';
// import NewBrand from './Components/NewBrand';
const EditBrands=lazy(()=>import('./Components/EditBrands'))
const BrandList=lazy(()=>import('./Components/BrandList'))
const NewBrand=lazy(()=>import('./Components/NewBrand'))
function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<BrandList />} />
        <Route path="/newbrand" element={<RecoilRoot><NewBrand /></RecoilRoot>} />
        <Route path="/edit" element={<RecoilRoot><EditBrands /></RecoilRoot>} />
      </Routes>
    </Suspense>
    <RecoilRoot>
      <FormComponent />
    </RecoilRoot>
  </Router>
  );
}

export default App;
