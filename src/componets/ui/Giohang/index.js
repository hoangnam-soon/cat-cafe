import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles({
   images : {
       width :'100%',
   },
   root : {
       padding :20,
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
       cursor: 'pointer',
       "@media (max-width : 576px)": {
        // margin: 'auto',
        top : 35,
        right :20
    }
   },
   iconitem : {
    fontSize: 24,
    color: '#ea8025',
    opacity : '0.8',
    marginRight : 10,
    cursor: 'pointer',
    "@media (max-width : 576px)": {
        // margin: 'auto',
        fontSize :18
    }
    
   }, 
   iconnumber : {
    marginRight : 10,
    fontSize: 24,
    "@media (max-width : 576px)": {
        // margin: 'auto',
        fontSize :18
    }
   },
   nameitem : {
       fontFamily : 'Oswald',
       fontSize : 18,
       "@media (max-width : 576px)": {
        // margin: 'auto',
        fontSize :14
    }
      

   },
   price : {
    fontFamily : 'Oswald',
    fontSize : 18,
    color : '#EA8025',
    "@media (max-width : 576px)": {
        // margin: 'auto',
        fontSize:14
    }
   },
   totalprice : {
    fontFamily : 'Oswald',
    fontSize : 18,
    position : "relative",
    "@media (max-width : 576px)": {
        // margin: 'auto',
        fontSize:14
    }
   }


})


const Giohang = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid  item xs={12} >
            <Grid className={classes.boxitem} container spacing={0}>
                <Grid className={classes.titletop} item xs={6} >
                    Sản phẩm
                </Grid>
                <Grid  className={classes.titletop} item xs={2} xs={2}>
                    Giá
                </Grid>
                <Grid className={classes.titletop} item xs={2}>
                    Số lượng
                </Grid>
                <Grid className={classes.titletop} item xs={2}>
                   Tạm tính
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
                <Grid className={classes.price}  item xs={2}>
                    200,000 Đ
                </Grid>
                <Grid item xs={2}>
                        <span className={classes.iconitem}><i class="fas fa-minus-circle"></i></span>
                       <span className={classes.iconnumber}>2</span>
                       <span className={classes.iconitem}><i class="fas fa-plus-circle"></i></span>
                </Grid>
                <Grid className={classes.totalprice} item xs={2}>
                   400,000 Đ
                   <span className={classes.closeicon}><i  class="fas fa-times"></i></span>
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
                        <span className={classes.iconitem}><i class="fas fa-minus-circle"></i></span>
                       <span className={classes.iconnumber}>2</span>
                       <span className={classes.iconitem}><i class="fas fa-plus-circle"></i></span>
                </Grid>
                <Grid className={classes.totalprice} item xs={2}>
                   400,000 Đ
                   <span className={classes.closeicon}><i  class="fas fa-times"></i></span>
                </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </div>
    )
}
export default Giohang