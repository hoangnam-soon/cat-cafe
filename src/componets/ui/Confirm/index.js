import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

// import ControlledOpenSelect from '../../../hook/ControlledOpenSelect'


const useStyles = makeStyles ({
    root : {
        marginTop :-15
    },
    boxinput: {
        margin : '15px 0px',
        width : '80%'
    },
    images: {
        width :'100%'
    }
    ,
   titletop : {
    fontFamily: "'Oswald'",
     fontSize: "20px", 
     fontWeight: 500 
   },
   
   closeicon : {
       position: 'absolute',
       top : 50 ,
       right : 20,
       opacity : 0.3,
       cursor: 'pointer'
   },
   iconitem : {
    // fontSize: "x-large",
    marginRight : 10,
    cursor: 'pointer'
   }, 
   iconnumber : {
    // padding: 10,
    margin : 'auto'
    // fontSize :14
   },
   nameitem : {
       fontFamily : 'Oswald',
       fontSize : 14,
       margin : 'auto'

   },
   price : {
    fontFamily : 'Oswald',
    fontSize : 14,
    color : '#EA8025',
    margin : 'auto'
   },
   totalprice : {
    fontFamily : 'Oswald',
    fontSize : 14,
    position : "relative",
    margin : 'auto'
   },
   boxitem :{
       

    '&:after':{
       content: "''",
       width: "100%",
       height: "2px",
       background: "#EA8025",
       opacity: 0.5
    }
  },
  itemLeft : {
      marginTop :25
  },
  h3title : {
    fontFamily : 'Oswald',
   fontSize : 20,
   color : '#EA8025'
}

});


const Confirm = () => {
    
    const classes = useStyles();
    

    return(
     
           
        <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg ={6}>
            <h3 className={classes.h3title}>Xác nhận đơn hàng</h3>

            <p>Họ tên : Nguyễn Tiến Khoa</p>
            <p>Số điện thoại : 09999999999</p>
            <p>Email : tienkhoa6969@gmail.com</p>
            <p>Địa chỉ : Sóc Sơn - Hà Nội</p>
            <p>Ngày đặt hàng : 17/7/2021</p>

             
           
          </Grid>
          <Grid className={classes.itemLeft} item xs={12} lg={6} >
            <Grid container spacing={0}>
            <Grid  item xs={12} >
          <Grid className={classes.boxitem} container spacing={0}>
                
                <Grid  item xs={2}>
                    <img className={classes.images} src="https://hoangnam-soon.github.io/Cat-Cafe/img/Item/cat-food/thuc-an-cho-meo-bao-ve-rang-mieng-royal-canin-oral-care-400x400.jpg" alt="" />
                    
                </Grid>
                <Grid className={classes.nameitem} item xs={4}>
                    RoyalCanin bảo vệ răng
                </Grid>
                <Grid className={classes.price}  item xs={2}>
                    200,000 Đ
                </Grid>
                <Grid className={classes.iconnumber} item xs={2}>
                        
                       <span className={classes.iconnumber}>2</span>
                       
                </Grid>
                <Grid className={classes.totalprice} item xs={2}>
                   400,000 Đ
                 
                </Grid>
            </Grid>
          
          </Grid>
          <Grid  item xs={12} >
          <Grid className={classes.boxitem} container spacing={0}>
                
                <Grid  item xs={2}>
                    <img className={classes.images} src="https://hoangnam-soon.github.io/Cat-Cafe/img/Item/cat-food/thuc-an-cho-meo-bao-ve-rang-mieng-royal-canin-oral-care-400x400.jpg" alt="" />
                   
                </Grid>
                <Grid className={classes.nameitem} item xs={4}>
                    RoyalCanin bảo vệ răng
                </Grid>
                <Grid className={classes.price} item xs={2}>
                    200,000 Đ
                </Grid>
                <Grid item xs={2}>
                      
                       <span className={classes.iconnumber}>2</span>
                       
                </Grid>
                <Grid className={classes.totalprice} item xs={2}>
                   400,000 Đ
                  
                </Grid>
            </Grid>
          </Grid>


            </Grid>

            
          </Grid>
          
        </Grid>
      </div>


    )
}
export default Confirm