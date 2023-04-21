import { Box, Button, Card, CardContent, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Styles } from './common/Styles';
import React, { useEffect, useState } from 'react'
import { host } from './steps/api';
import { renderText } from './common/displayComponents';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BrandList = (props) => {
  const {classes}=props
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(host+'/brands');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Box>
        <Button component={Link} to={{ pathname: '/newbrand'}}>New Brand</Button>
        <Grid container className={classes.brandContainer}>
        {data.map((item)=>(
          <Grid item className={classes.brandItems}>
            <Card key={item.storeId}>
              <CardContent>
                {renderText({label:item.name,variant:"h3"})}
                <Grid container className={classes.brandItemsData}>
                  <Grid item>
                    <Box>{renderText({label:'Prefix: '+item.prefix,align:'left'})}</Box>
                  </Grid>
                  <Grid item>
                    <Box>{renderText({label:'Logo Url: '+item.logoUrl,align:'left'})}</Box>
                  </Grid>
                  <Grid item>
                    <Box>{renderText({label:'Fevicon Url: '+item.fevicon_url})}</Box>
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="right" alignItems="center">
                  <Button component={Link} to={{ pathname: '/edit'}} onClick={() => {
                                      localStorage.setItem(
                                        "status",
                                        JSON.stringify({
                                          storeId: item.storeId,
                                        })
                                      );}} variant='outlined'>Edit</Button>
                  {/* <Link to={"/edit"} onClick={() => {
                                      localStorage.setItem(
                                        "status",
                                        JSON.stringify({
                                          storeId: item.storeId,
                                        })
                                      );}}>Edit</Link> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
      
  )
}
export default withStyles(Styles)(BrandList);
// state: { storeId: item.storeId }