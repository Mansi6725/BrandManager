import { atom } from "recoil";

export const formdata = atom({
  key: "formdata",
  default: {
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
  },
});
export const login = atom({
  key: "login",
  default: {
    emailId: "",
    password: "",
  },
});
