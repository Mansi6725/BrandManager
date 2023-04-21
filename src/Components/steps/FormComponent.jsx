import { Box, Grid,Paper,Step,StepLabel,Stepper,withStyles } from '@material-ui/core'
import axios from 'axios';


import {  renderText } from '../common/displayComponents';
import { Styles } from '../common/Styles'
import { host } from './api';
import Finished from './Finished';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { formcurrentStep, formdata, formerrors, formsubmitting } from '../common/FormData';
import { useRecoilState} from 'recoil';
const FormComponent=(props)=>{
        // const{data,setData,errors,setErrors,submitting,setSubmitting,currentStep,setCurrentStep}=this.props;
        const[data,setData]=useRecoilState(formdata)
        const[errors,setErrors]=useRecoilState(formerrors)
        const[submitting,setSubmitting]=useRecoilState(formsubmitting)
        const[currentStep,setCurrentStep]=useRecoilState(formcurrentStep)
        const { classes } =props;
        const handleOnChange=({target})=>{
            // const{data}=this.state;
            // target.value.length<2 && target.name!="page_id"?
            // (errors[target.name]=`${target.name} should have at least 2 characters`)
            // :(errors[target.name]="");
            // console.log("event",target.name,"value",target.value);
            // console.log(target);
            // data[target.name]=target.value;
            // this.setState({data:data});
            setData((data) => ({
                ...data,
                [target.name]: target.value,
              }))
        };
        const handleNext=async()=>{
            try {
                // let{currentStep,errors}=this.state;
                // const{data}=this.state;
                let temperrors={...errors};
                if(currentStep===0){
                    const{name,logoUrl}=data;
                    if(!name){
                        console.log("hhh")
                        temperrors.name="This field is required";
                        console.log("ggg")
                        // this.setState({ errors, currentStep:0 });
                          setErrors(temperrors);
                          setCurrentStep(0);
                          console.log("kk")
                        return;
                    }
                    else if(!logoUrl){
                        temperrors.logoUrl="This field is required";
                        // this.setState({ errors, submitting: false,currentStep:0 });
                        setErrors(temperrors)
                          setCurrentStep(0);
                        return;
                    }
                    
                    // if(name=="")
                    // errors["name"]="Brand name cannot be blank";
                    // this.setState({errors});
                    
                    temperrors.name="";
                    temperrors.logoUrl="";
                    // setErrors((prev) => ({ //in order to setErrors first and then executing the remaining function
                    //     ...prev,
                    //     name: '',
                    //     logoUrl: '',
                    //   }))
                    //   console.log(errors)
                    
                    
                    const formdata={name,logoUrl};
                    const response = await axios.post(host+'/validate/step1', formdata);
                    console.log(response);
                    // console.log(errors);
                    if (response.status === 200 && temperrors["name"]==="" && temperrors["logoUrl"]==="") {
                        //   currentStep=currentStep+1;
                        //   this.setState({currentStep,errors});
                          setCurrentStep(currentStep+1);
                      }
                }
                else if(currentStep===4){
                    const{domain,apiKey}=data;
                    if (!domain) {
                        temperrors.domain = "This field is required";
                        // this.setState({ errors, submitting: false,currentStep:4});
                        setErrors(temperrors)
                          setCurrentStep(4);
                          setSubmitting(false);
                        return;
                      }
                    else if (!apiKey) {
                        temperrors.apiKey = "This field is required";
                        // this.setState({ errors, submitting: false,currentStep:4 });
                        setErrors(temperrors)
                          setCurrentStep(4);
                          setSubmitting(false);
                        return;
                    }
                    temperrors.domain="";
                    temperrors.apiKey="";
                    // currentStep=currentStep+1;
                    // this.setState({currentStep,errors});
                    setErrors(temperrors)
                      setCurrentStep(currentStep+1);
                    
                }
                else {
                    // currentStep=currentStep+1;
                    // this.setState({currentStep});
                      setCurrentStep(currentStep+1);
                }
              } catch (error) {
                    console.log("hii")
                    const faultyData=error.response.data;
                    let temperror={...errors}//if(currentStep==0){
                    const{name,logoUrl}=data;
                    console.log(error.response.data);//comment afterwards
                    
                    (name===faultyData.name)?
                    temperror["name"]="brand name already exists":
                    temperror["name"]="";
                    (logoUrl===faultyData.logoUrl)?
                    temperror["logoUrl"]="This logo url already exists":
                    temperror["logoUrl"]="";//} else if(currentStep==1){
                    setErrors(temperror);
              }
            
        };
        const handlePrev=()=>{
            // console.log(this.state.errors);
            // let{currentStep}=this.state;
            // currentStep=currentStep-1;
            // this.setState({currentStep});
              setCurrentStep(currentStep-1);
        };
        const handleEdit=()=>{
            // console.log("hii");
            // let{currentStep}=this.state;
            // currentStep=0;
            // this.setState({currentStep});
            setCurrentStep(0)
        };
        const handleSubmit = async (event) => {
            event.preventDefault();
            // const {data}=this.state;
            // let {submitting}=this.state;
            // submitting=true;
            // this.setState({submitting});
              setSubmitting(true);
            
            try {
              const response = await axios.post(host+'/newbrand', data);
              console.log(response.data);
            } catch (error) {
              console.log(error);
            //   submitting = false;
            //   this.setState({ submitting });
            setSubmitting(false)
            }
            // submitting=true;
            // this.setState({submitting});
          };
        const stepperStep=[
            {label:"Brand Name and url"},
            {label:"Brand category node"},
            {label:"Page"},
            {label:"Configuration values"},
            {label:"Add Domain"}
        ];
        const getStepsItems=(steps)=>{
            switch(steps){
                case 0:
                    return <Step1 data errors
                    handleOnChange={handleOnChange}
                    handleNext={handleNext}/>
                case 1:
                    return <Step2 data errors
                    handleOnChange={handleOnChange}
                    handleNext={handleNext}
                    handlePrev={handlePrev}/>
                case 2:
                    return <Step3 data errors
                    handleOnChange={handleOnChange}
                    handleNext={handleNext}
                    handlePrev={handlePrev}/>
                case 3:
                    return <Step4 data errors
                    handleOnChange={handleOnChange}
                    handleNext={handleNext}
                    handlePrev={handlePrev}/>
                case 4:
                    return <Step5 data errors
                    handleOnChange={handleOnChange}
                    handleNext={handleNext}
                    handlePrev={handlePrev}/>
                case 5:
                    return <Finished data handleEdit={handleEdit} submitting handleSubmit={handleSubmit}/>
                default:
                    return <Step1/>

            }
        }
        return (
            <Grid container className={classes.formContainer}>
                <Grid item xs={12} sm={7}>
                    <Paper component={Box} p={2}>
                        <Box mb={1}>
                            {renderText({label:"Create a new Brand"})}
                        </Box>
                        <Stepper activeStep={currentStep} alternativeLabel>
                            {stepperStep.map((item,index) => (
                                <Step key={index} classes={{
                                    root: classes.step,
                                    completed: classes.completed,
                                    // active: classes.active
                                  }}>
                                    <StepLabel StepIconProps={{classes: {root: classes.step,completed: classes.completed,active: classes.active}}}>{item.label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Paper>
                    <br/>
                    <Paper mb={2} component={Box}>
                        {submitting?<Box mt={3} mb={3} p={2}>{renderText({label:"Thank You! Form Successfully Submitted"})}</Box>:
                        <form className={classes.form} onSubmit={handleSubmit}>
                            {getStepsItems(currentStep)}
                        </form>
                        }
                    </Paper>
                </Grid>
            </Grid>
           )
}
  export default withStyles(Styles)(FormComponent);


//   state={
//     data:{
//         name:"",
//         prefix:"",
//         logoUrl:"",
//         fevicon_url:"",

//         category_name:"",
//         category_prefix:"",
//         parent_menu_node:"",
//         menu_name:"",

//         page_type:"",
//         page_id:Number,

//         hkpay_account_id:"",
//         hkpay_secret_key:"",
//         location_code:"",
//         s3_secret_key:"",
//         s3_access_key:"",
//         s3_upload_bucket:"",
//         s3_download_bucket:"",

//         domain:"",
//         domainType:"",
//         fromEmail:"",
//         replyEmail:"",
//         fromName:"",
//         apiKey:"",
//         mailClientId:"",
//         domainName:"",
//         parentDomain:""

//     },
//     errors:{
//         name:"",
//         prefix:"",
//         logoUrl:"",
//         fevicon_url:"",

//         category_name:"",
//         category_prefix:"",
//         parent_menu_node:"",
//         menu_name:"",

//         page_type:"",

//         hkpay_account_id:"",
//         hkpay_secret_key:"",
//         location_code:"",
//         s3_secret_key:"",
//         s3_access_key:"",
//         s3_upload_bucket:"",
//         s3_download_bucket:"",

//         domain:"",
//         domainType:"",
//         fromEmail:"",
//         replyEmail:"",
//         fromName:"",
//         apiKey:"",
//         mailClientId:"",
//         domainName:"",
//         parentDomain:""
//     },
//     currentStep:0,
//     submitting:false,
// };