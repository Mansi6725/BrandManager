import React, { useEffect } from "react";
import { host } from "../api";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { formdata } from "./common/FormData";
import FormComponent from "./form/FormComponent";

const EditBrands = () => {
  const storeId = JSON.parse(sessionStorage.getItem("status")).storeId;
  const setData = useSetRecoilState(formdata);
  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
   
      var url = `${host}/storeid/${storeId}`;
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    
  }, []);
  return (
    <div style={{ backgroundColor: "#ccf0f1" }}>
      {/* <RecoilRoot><FormComponent/></RecoilRoot> */}
      <FormComponent storeId={storeId} />
    </div>
  );
};

export default EditBrands;
