import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { host } from './steps/api';
import axios from 'axios';
import {useSetRecoilState } from 'recoil';
import {formdata} from './common/FormData'
import FormComponent from './steps/FormComponent';
const EditBrands = () => {
  
  const storeId = JSON.parse(localStorage.getItem("status")).storeId;
 
  // const location = useLocation();
  // const storeId = location.state.storeId;
  // console.log("storeId",storeId)
  const setData = useSetRecoilState(formdata);
  useEffect(() => {
    // console.log("useeffect run")
    var url=`${host}/${storeId}`
    // console.log(url)
    axios.get(url)
      .then((response) =>{setData(response.data)})
      .catch((error) => {console.log(error)});
  }, [storeId]);

  return (
    <div>
      {/* <h1>Edit Page</h1>
      <p>ID: {data.storeId}</p>
      <p>Name: {formData&&formData.name}</p>
      <p>prefix: {formData&&formData.prefix}</p>
      <p>category name: {formData&&formData.category_name}</p> */}
      {/* <p>Description: {data.description}</p> */}
      {/* Render the edit form */}
      <FormComponent/>
    </div>
  )
}

export default EditBrands
// import { useLocation } from 'react-router-dom';
// import { host } from './steps/api';

// function EditPage() {
//   const location = useLocation();
//   const id = location.state.id;

//   return (
//     <div>
//       <h1>Edit Page</h1>
//       <p>ID: {id}</p>
//     </div>
//   );
// }

