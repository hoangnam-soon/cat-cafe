import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ControlledOpenSelect from '../../../hook/ControlledOpenSelect'


const useStyles = makeStyles ({
    boxinput: {
        margin : '15px 0px',
        width : '80%'
    },
    h3title : {
        fontFamily : 'Oswald',
       fontSize : 20,
    },
    root : {
        marginTop : -15
    }

});


const Datacustomer = () => {
    
    const classes = useStyles();
    const [value, setValue] = React.useState('COD');
    const [showCard, setShowCard] = useState(false)
    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const RederCard = () => {

        return(<>


            <ControlledOpenSelect/>


        </>
           
        )
    };


    return(
     
           
        <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6}>
            <h3 className={classes.h3title}>1.Thông tin khách hàng</h3>
            <form className={classes.root} noValidate autoComplete="off">
           
            <TextField classes={{root:classes.boxinput}} id="outlined-basic" label="Họ tên" variant="outlined" />
            <TextField classes={{root:classes.boxinput}} id="outlined-basic" label="Số điện thoại" variant="outlined" />
            <TextField classes={{root:classes.boxinput}} id="outlined-basic" label="Email" variant="outlined" />
            <TextField classes={{root:classes.boxinput}} id="outlined-basic" label="Địa chỉ" variant="outlined" />
            </form>
          </Grid>
          <Grid item xs={12} lg={6}>
            <h3 className={classes.h3title}>2.Hình thức thanh toán</h3>
            <FormControl component="fieldset">
                
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="COD" control={<Radio />} label="Thanh toán khi nhận hàng" />
                <FormControlLabel onClick={() => setShowCard(!showCard)} value="Card" control={<Radio />} label="Thanh toán qua thẻ ngân hàng" />
                </RadioGroup>
            </FormControl>


            {/* {
                showCard && <RederCard />
            } */}
            
          </Grid>
          
        </Grid>
      </div>


    )
}
export default Datacustomer