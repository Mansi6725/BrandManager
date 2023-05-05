import React from "react";
import FormComponent from "./form/FormComponent";
import { formdata, login } from "./common/FormData";
import { useSetRecoilState } from "recoil";
// import { useNavigate } from 'react-router-dom'

const NewBrand = () => {
  // const resetData=useResetRecoilState(formdata)
  // resetData();
  const setData = useSetRecoilState(formdata);

  setData({
    name: "",
    prefix: "",
    logoUrl: "",
    fevicon_url: "",

    category_name: "",
    category_prefix: "",
    parent_menu_node: "",
    menu_name: "",

    page_type: "",
    page_id: "",

    hkpay_account_id: "",
    hkpay_secret_key: "",
    location_code: "",
    s3_secret_key: "",
    s3_access_key: "",
    s3_upload_bucket: "",
    s3_download_bucket: "",

    domain: "",
    domainType: "",
    fromEmail: "",
    replyEmail: "",
    fromName: "",
    apiKey: "",
    mailClientId: "",
    domainName: "",
    parentDomain: "",
  });

  return (
    <div style={{ backgroundColor: "#ccf0f1", width: "100%" }}>
      {/* <RecoilRoot><FormComponent/></RecoilRoot> */}
      <FormComponent />
    </div>
  );
};

export default NewBrand;
