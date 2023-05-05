import { Box, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Styles } from "./common/Styles";
import React, { useEffect, useState } from "react";
import { host } from "../api";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilState } from "recoil";
import { login } from "./common/FormData";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "bold",
    fontSize: "24px",
    // margin: '20px',
    paddingTop: "15px",
    color: "#00b5b7",
    textAlign: "center",
    // textShadow: "1px 1px 1px #ffaf87, 2px 2px 0px rgba(0,0,0,0.15)",
  },

  button: {
    backgroundColor: "#ff8914",
    color: "#fff",
    fontWeight: "bold",
    border: "1px solid #ff8914",
    "&:hover": {
      backgroundColor: "#fff9f4",
      color: "#ff8914",
    },
  },
}));

const BrandList = (props) => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  // const [pageSize, setPageSize] = useState(10);
  const [user, setUser] = useRecoilState(login);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(host + "/brands");
      setData(result.data);
    };
    if (user.emailId === "") navigate("/login");
    fetchData();
  }, []);

  // const handlePageSizeChange = (e) => {
  //   setPageSize(e);
  // };

  const inRequiredFormat = (data) => {
    const fieldsToInclude = [
      "storeId",
      "name",
      "prefix",
      "logoUrl",
      "fevicon_url",
    ];

    const newArray = data.map((item) => {
      const newData = {};
      fieldsToInclude.forEach((key) => (newData[key] = item[key]));
      return newData;
    });
    return newArray;
  };

  const handleEdit = (storeId) => {
    localStorage.setItem(
      "status",
      JSON.stringify({
        storeId: storeId,
      })
    );
  };

  const columns = [
    {
      field: "storeId",
      headerName: "STORE ID",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "BRAND NAME",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "prefix",
      headerName: "PREFIX",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "logoUrl",
      headerName: "LOGO URL",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "fevicon_url",
      headerName: "FEVICON URL",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "",
      width: 100,
      align: "center",
      sortable: false,
      renderCell: (params) => {
        return (
          <Button
            className={classes.button}
            component={Link}
            to={{ pathname: "/edit" }}
            variant="contained"
            // color="primary"
            onClick={() => handleEdit(params.row.storeId)}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#ccf0f1" }}>
      <Box className={classes.heading}>AVAILABLE BRANDS</Box>
      <Box
        m="20px 40px 0 40px"
        height="79vh"
        sx={{
          "& .name-columne--cell": {
            color: "#2e7c67",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#fff9f4",
            color: "#ff8914",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#FFFFFF",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#fff9f4",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#858585 !important",
          },
          "& .MuiDataGrid-row": {
            color: "#00b5b7",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
            boxShadow: "none",
            border: "none",
          },
        }}
      >
        <DataGrid
          rows={inRequiredFormat(data)}
          columns={columns}
          getRowId={(row) => row.storeId}
          // rowsPerPageOptions={[10, 20, 50, 100]}
          // pageSize={pageSize}
          // onPageSizeChange={handlePageSizeChange}
          disableSelectionOnClick
          disableColumnMenu
          // hideFooterPagination
          pagination
        pageSize={10}
        // autoHeight
        hideFooterPagination={data.length <= 10}
        />
      </Box>
    </Box>
  );
};
export default withStyles(Styles)(BrandList);
