import { Box, Grid,Paper,Step,StepLabel,Stepper,withStyles } from '@material-ui/core'
import axios from 'axios';
import { PropTypes } from 'prop-types'
import React, { Component } from 'react'
import {  renderText } from '../common/displayComponents';
import { Styles } from '../common/Styles'
import Finished from './Finished';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
class FormComponent extends Component{
    state={
        data:{
            name:"",
            prefix:"",
            logo_url:"",
            fevicon_url:"",

            category_name:"",
            category_prefix:"",
            parent_menu_node:"",

            page_type:"",
            id:Number,

            hkpay_account_id:"",
            hkpay_secret_key:"",
            location_code:"",
            s3_secret_key:"",
            s3_access_key:"",
            s3_upload_bucket:"",
            s3_download_bucket:""

        },
        errors:{},
        currentStep:0,
        submitting:false,
    };
    render(){
        const { classes } =this.props;
        const handleOnChange=({target})=>{
            const{data,errors}=this.state;
            target.value.length<3?
            (errors[target.name]=`${target.name} should have at least 3 characters`)
            :(errors[target.name]="");
            console.log("event",target.name,"value",target.value);
            // console.log(target);
            data[target.name]=target.value;
            this.setState({data:data});
        };
        const handleNext=()=>{
            let{currentStep}=this.state;
            currentStep=currentStep+1;
            this.setState({currentStep});
        };
        const handlePrev=()=>{
            let{currentStep}=this.state;
            currentStep=currentStep-1;
            this.setState({currentStep});
        };
        const handleEdit=()=>{
            console.log("hii");
            let{currentStep}=this.state;
            currentStep=0;
            this.setState({currentStep});
        };
        const handleSubmit = async (event) => {
            event.preventDefault();
            const {data}=this.state;

            let {submitting}=this.state;
            submitting=true;
            this.setState({submitting});
            try {
              const response = await axios.post('/api/my-endpoint', data);
              console.log(response.data);
            } catch (error) {
              console.log(error);
            }
            // submitting=true;
            // this.setState({submitting});
          };
        const stepperStep=[
            {label:"Brand Name and url"},
            {label:"Brand category node"},
            {label:"Page"},
            {label:"Configuration values"},
        ];
        const getStepsItems=(steps)=>{
            switch(steps){
                case 0:
                    return <Step1 state={this.state}
                    handleOnChange={handleOnChange}
                    handleNext={handleNext}/>
                case 1:
                    return <Step2 state={this.state}
                    handleOnChange={handleOnChange}
                    handleNext={handleNext}
                    handlePrev={handlePrev}/>
                case 2:
                    return <Step3 state={this.state}
                    handleOnChange={handleOnChange}
                    handleNext={handleNext}
                    handlePrev={handlePrev}/>
                case 3:
                    return <Step4 state={this.state}
                    handleOnChange={handleOnChange}
                    handleNext={handleNext}
                    handlePrev={handlePrev}/>
                case 4:
                    return <Finished data={this.state.data} handleEdit={handleEdit} submitting={this.state.submitting} handleSubmit={handleSubmit}/>
                default:
                    return <Step1/>

            }
        }
        return (
            <Grid container className={classes.formContainer}>
                <Grid item xs={12} sm={7}>
                    <Paper component={Box} p={2}>
                        <Box mb={1}>
                            {renderText({label:"Create a new Brand",color:"black"})}
                        </Box>
                        <Stepper activeStep={this.state.currentStep} alternativeLabel>
                            {stepperStep.map((item,index) => (
                                <Step key={index}>
                                    <StepLabel>{item.label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Paper>
                    <br/>
                    <Paper mb={2} component={Box}>
                        {this.state.submitting?<Box mt={3} mb={3} p={2}>{renderText({label:"Thank You! Form Successfully Submitted"})}</Box>:
                        <form className={classes.form} onSubmit={handleSubmit}>
                            {getStepsItems(this.state.currentStep)}
                        </form>
                        }
                    </Paper>
                </Grid>
            </Grid>
           )
         }
    }
  
FormComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(Styles)(FormComponent);