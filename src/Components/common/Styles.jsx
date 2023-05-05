export const Styles = {
  formContainer: {
    // margin: '50px' sx={{backgroundColor:'#ccf0f1'}}
    // backgroundColor:'#ccf0f1',
    width: "100%",
    // height:"98vh",
    paddingTop: "20px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
  },
  form: {
    minHeight: "282px",
    // padding:"16px"
  },
  step: {
    "& $completed": {
      color: "#00b5b7",
    },
    "& $active": {
      color: "orange",
    },
    // "& $disabled": {
    //   color: "red"
    // }
  },

  active: {}, //needed so that the &$active tag works
  completed: {},
  disabled: {},
};
