import {
  Box,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  withStyles,
} from "@material-ui/core";
import axios from "axios";

import { renderText } from "../common/displayFormComponents";
import { Styles } from "../common/Styles";
import { host } from "../../api.js";
import Finished from "./Finished";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { formdata, login } from "../common/FormData";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const FormComponent = (props) => {
  const [user, setUser] = useRecoilState(login);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.emailId === "") {
      navigate("/login");
    }
  }, []);
  const [data, setData] = useRecoilState(formdata);
  const [errors, setErrors] = useState({
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
  const [submitting, setSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  // const history = unstable_HistoryRouter();

  const { classes } = props;
  let edit = false;
  if (props.storeId) {
    edit = true;
  }
  //do not do this as data['name'] will change on onchange event and edit will be set to true.
  // if(data['name']!=''){
  //     edit=true;
  // }
  const handleOnChange = ({ target }) => {
    setData((data) => ({
      ...data,
      [target.name]: target.value,
    }));
  };
  const handleNext = async () => {
    try {
      if (edit === false) {
        let temperrors = { ...errors };
        if (currentStep === 0) {
          const { name, logoUrl } = data;
          if (!name) {
            temperrors.name = "This field is required";
            setErrors(temperrors);
            setCurrentStep(0);
            return;
          } else if (!logoUrl) {
            temperrors.logoUrl = "This field is required";
            setErrors(temperrors);
            setCurrentStep(0);
            return;
          }

          temperrors.name = "";
          temperrors.logoUrl = "";
          const formdata = { name, logoUrl };
          const response = await axios.post(host + "/validate/step1", formdata);
          if (
            response.status === 200 &&
            temperrors["name"] === "" &&
            temperrors["logoUrl"] === ""
          ) {
            setCurrentStep(currentStep + 1);
            setErrors(temperrors);
          }
        } else if (currentStep === 4) {
          const { domain, apiKey } = data;
          if (!domain) {
            temperrors.domain = "This field is required";
            setErrors(temperrors);
            setCurrentStep(4);
            setSubmitting(false);
            return;
          } else if (!apiKey) {
            temperrors.apiKey = "This field is required";
            setErrors(temperrors);
            setCurrentStep(4);
            setSubmitting(false);
            return;
          }
          temperrors.domain = "";
          temperrors.apiKey = "";
          setErrors(temperrors);
          setCurrentStep(currentStep + 1);
        } else {
          setCurrentStep(currentStep + 1);
        }
      } else {
        setCurrentStep(currentStep + 1);
      }
    } catch (error) {
      const faultyData = error.response.data;
      let temperror = { ...errors };
      const { name, logoUrl } = data;
      // console.log(error.response.data);

      name === faultyData.name
        ? (temperror["name"] = "brand name already exists")
        : (temperror["name"] = "");
      logoUrl === faultyData.logoUrl
        ? (temperror["logoUrl"] = "This logo url already exists")
        : (temperror["logoUrl"] = "");
      setErrors(temperror);
    }
  };
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleEdit = () => {
    setCurrentStep(0);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      console.log(edit);
      if (edit === false) {
        const response = await axios.post(host + "/newbrand", data);
        console.log(response.data);
      } else {
        const response = await axios.put(
          `${host}/editbrand/${props.storeId}`,
          data
        );
        console.log(response.data);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }
  };
  const stepperStep = [
    { label: "Brand Name and url" },
    { label: "Brand category node" },
    { label: "Page" },
    { label: "Configuration values" },
    { label: "Add Domain" },
  ];
  const getStepsItems = (steps) => {
    switch (steps) {
      case 0:
        return (
          <Step1
            data={data}
            errors={errors}
            handleOnChange={handleOnChange}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <Step2
            data={data}
            errors={errors}
            handleOnChange={handleOnChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 2:
        return (
          <Step3
            data={data}
            errors={errors}
            handleOnChange={handleOnChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 3:
        return (
          <Step4
            data={data}
            errors={errors}
            handleOnChange={handleOnChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 4:
        return (
          <Step5
            data={data}
            errors={errors}
            handleOnChange={handleOnChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 5:
        return (
          <Finished
            data={data}
            handleEdit={handleEdit}
            submitting={submitting}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return <Step1 />;
    }
  };
  return (
    <Grid container className={classes.formContainer}>
      <Grid item xs={12} sm={7}>
        <Paper component={Box} p={2}>
          <Box mb={1}>
            {edit
              ? renderText({ label: "Update Brand" })
              : renderText({ label: "Create a new Brand" })}
          </Box>
          <Stepper  style={{ height: '130px' }} activeStep={currentStep} alternativeLabel>
            {stepperStep.map((item, index) => (
              <Step
                key={index}
                classes={{
                  root: classes.step,
                  completed: classes.completed,
                  // active: classes.active
                }}
              >
                <StepLabel
                  StepIconProps={{
                    classes: {
                      root: classes.step,
                      completed: classes.completed,
                      active: classes.active,
                    },
                  }}
                >
                  {item.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
        <br />
        <Paper mb={2} component={Box}>
          {submitting ? (
            <Box mt={3} mb={3} p={2}>
              {renderText({ label: "Thank You! Form Successfully Submitted" })}
            </Box>
          ) : (
            <form className={classes.form} onSubmit={handleSubmit}>
              {getStepsItems(currentStep)}
            </form>
          )}
        </Paper>
      </Grid>
      {/* <div style={{height: '500px',width:'100%'}}></div> */}
    </Grid>
  );
};
export default withStyles(Styles)(FormComponent);
