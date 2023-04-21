import { Box, Grid} from '@material-ui/core'
import React from 'react'
import { renderButton, renderText } from '../common/displayComponents'


const Finished = ({data,handleEdit,submitting,handleSubmit}) => {
    // console.log(submitting);
  return (
    <Box p={3}>
        <Box mb={2}>
            {renderText({label:"Your Given Details",color:"black"})}
        </Box>
        <Box >
            <Box m={2}>
                <Box>Brand Name: {data.name}</Box>
                <Box>Prefix: {data.prefix}</Box>
                <Box>Logo URL: {data.logo_url}</Box>
                <Box>Fevicon URL: {data.fevicon_url}</Box>
            </Box>
            <Box m={2}>
                <Box>Category Name: {data.category_name}</Box>
                <Box>Category Prefix: {data.category_prefix}</Box>
                <Box>Parent Menu Node: {data.parent_menu_node}</Box>
            </Box>
            <Box m={2}>
                <Box>Page Type: {data.page_type}</Box>
                <Box>Page Id: {data.id}</Box>
            </Box>
            <Box m={2}>
                <Box>HKPay Account Id: {data.hkpay_account_id}</Box>
                <Box>HKPay Secret Key: {data.hkpay_secret_key}</Box>
                <Box>Location Code: {data.location_code}</Box>
                <Box>S3 Secret Key: {data.s3_secret_key}</Box>
                <Box>S3 Access Key: {data.s3_access_key}</Box>
                <Box>S3 Upload Bucket: {data.s3_upload_bucket}</Box>
                <Box>S3 Download Bucket: {data.s3_download_bucket}</Box>
            </Box>
            <Box m={2}>
                <Box>Domain: {data.domain}</Box>
                <Box>Domain Type: {data.domainType}</Box>
                <Box>From Email: {data.fromEmail}</Box>
                <Box>Reply Email: {data.replyEmail}</Box>
                <Box>From Name: {data.fromName}</Box>
                <Box>Api Key: {data.apiKey}</Box>
                <Box>Mail ClientId: {data.mailClientId}</Box>
                <Box>Domain Name: {data.domainName}</Box>
                <Box>Parent Domain: {data.parentDomain}</Box>
            </Box>
        </Box>
        <Grid container spacing={1} justifyContent="flex-end">
            <Grid item>
                <Box>
                    {renderButton({label:"Edit",handleOnClick:handleEdit})} 
                </Box>
            </Grid>
            <Grid item>
            <   Box>
                    {renderButton({label:"Submit",type:"submit",disabled:submitting,handleOnClick:handleSubmit})} 
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Finished
