import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Giohang from '../Giohang/index';
import Datacustomer from '../Datacustomers';
import Confirm from '../Confirm';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    


  },
  colorIcon : {
    '& svg' : {
      color  : '#EA8025 !important'
    }
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  case : {
      margin : 'auto',
      marginBottom :40,
      marginTop: 30

  },
  boxitemleft :{
    borderRight : '2px #EA8025 solid',
    
    padding: "0px 10px"
  },
  boxitemright :{
    
    
    padding: "0px 25px"
  },
  titleright : {
      fontFamily : 'Oswald',
      fontSize :18,

      fontWeight : '500',
      padding : '7px',
      
     '&:after':{
        content: "''",
        width: "100%",
        height: "2px",
        background: "#EA8025",
        opacity: 0.5
     },
     "@media (max-width : 1024px)": {
      margin: 'auto',
  },
  

  },
  titlenametotal : {
    fontFamily : 'Oswald',
      fontSize :18,
      fontWeight : '500',
      padding : '7px',
      
     '&:after':{
        content: "''",
        width: "100%",
        height: "2px",
        background: "#EA8025",
        opacity: 0.5
     },
     "@media (max-width : 1024px)": {
      margin: 'auto',
    },
    "@media (max-width : 576px)": {
      display :'none'
  },
  },
  price :{
    fontFamily : 'Oswald',
    fontSize :18,
    color : '#EA8025',
    fontWeight : '500',
    padding : '7px',
    "@media (max-width : 1024px)": {
      margin: 'auto',
  }
  },
  buyButton :{
    '&:hover':{
      // backgroundPosition: 'left',
      background : 'white',
      color : 'black',

    },
    display: 'inline-block',
    padding: '14px 75px',
    border: '1px solid #666666',
    color: 'white',
    fontWeight : 700,
    borderRadius: '3px',
    background : '#EA8025',
    // background: 'linear-gradient(to left, #EA8025 50%, #fff 50%) right',
    // backgroundSize: '200%',
    transition: 'all 0.7s',
    margin : '30px 0px',
    
    
    // "@media (max-width:768px)":{
    //   margin : '10px 20px'
      
    // },
    "@media (max-width:1200px)":{
      margin : '20px 10px'
      
    }, '@media (max-width : 768px)':{
      fontSize:'14px',
      margin : 'auto'
     
  
    },
    '@media (max-width : 576px)':{
      fontSize:'10px',
     margin: 'auto'
    }
  },
  buttonMobie : {
    '@media (max-width : 576px)':{
      // fontSize:'10px',
     margin: 'auto'
    }
  },
  thanks : {
    textAlign : 'center'
  },
  h3title1 : {
    fontFamily : 'Oswald',
   fontSize : 20,
   color :'#EA8025'
},
h3title : {
  fontFamily : 'Oswald',
 fontSize : 20,
},

}));

function getSteps() {
  return ['Giỏ hàng', 'Thông tin khách hàng', 'Đặt hàng thành công'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Giohang />;
    case 1:
      return <Datacustomer/>;
    case 2:
      return <Confirm/>;
    default:
      return 'Unknown step';
  }
};






export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
          <Grid className={classes.case} item lg={8}  sm={10}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                    <Step  key={label}>
                        <StepButton classes={{root:classes.colorIcon}} onClick={handleStep(index)} completed={completed[index]}>
                        {label}
                        </StepButton>
                    </Step>
                    ))}
                </Stepper>
          </Grid>
          <Grid className={classes.case} item lg={10}>
              
              {allStepsCompleted() ? (
          <div className={classes.thanks}>
            <div>
              <img src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/cat-ok.jpg?raw=true" alt="" />
            </div>
            <h3 className={classes.h3title1}> Đơn hàng của bạn đã đặt thành công !</h3>
            <h3 className={classes.h3title}> Cảm ơn bạn đã ủng hộ Black Cat Cafe . </h3>
            <p> Mọi thắc mắc xin liên hệ : 0969 696 969</p>
            <Link className={classes.buyButton} to = '/Pet-item/' >Tiếp tục mua hàng</Link>
          </div>
        ) : (<Grid container spacing={0}>
            <Grid className={classes.boxitemleft} item lg={8}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            </Grid>
           
            <Grid className={classes.boxitemright} item lg={4} xs={12}>



             <Grid container spacing={0}>
                     <Grid className={classes.titlenametotal}  item lg={12}>
                         Cộng giỏ hàng
                     </Grid>
                     <Grid className={classes.titleright} item lg={6}>
                         Tạm tính
                     </Grid>
                     <Grid className={classes.price} item lg={6}>
                         800,000 Đ
                     </Grid>
                     <Grid className={classes.titleright} item lg={6}>
                         Tổng
                     </Grid>
                     <Grid className={classes.price} item lg={6}>
                         800,000 Đ
                     </Grid>
                     <Grid className={classes.buttonMobie} item lg={12}>
                     {activeStep !== steps.length &&
                    (completed[activeStep] 
                    ? (
                    <Typography variant="caption" className={classes.completed} onClick={handleNext}>
                        <Button className={classes.buyButton} >Thanh toán</Button>
                    </Typography>
                      
                    ) :
                     (
                    <Button className={classes.buyButton}  onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1 ? 'Xác nhận' : 'Thanh toán'}
                    </Button>
                    ))}
                     </Grid>

             </Grid>
               
            </Grid>
          
          </Grid>
        )}
              </Grid>
          
      </Grid>
      
    </div>
  );
}
