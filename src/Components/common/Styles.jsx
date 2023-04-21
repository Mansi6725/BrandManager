export const Styles={
    formContainer:{
        width:"100%",
        height:"98vh",
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"center",
        alignItems:"center"
    },
    brandContainer:{
      width:'90%',
      display:"flex",
      flexFlow:"column",
      justifyContent:"center",
      alignItems:"center"
    },
    brandItems:{
      width:"90%",
      margin: '10px',
    },
    brandItemsData:{
      display:"flex",
      flexFlow:"column",
      justifyContent:"center",
      alignItems:"center"
    },
    form:{
        minHeight:"300px",
        // padding:"16px"
    },
    step: {
        "& $completed": {
          color: "#00b5b7"
        },
        "& $active": {
          color: "orange"
        },
        // "& $disabled": {
        //   color: "red"
        // }
    },
      
      active: {}, //needed so that the &$active tag works
      completed: {},
      disabled: {},
}