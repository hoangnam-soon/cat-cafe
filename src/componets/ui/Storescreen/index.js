import React from 'react';
import { makeStyles } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import {Cats} from '../../../assets/images/Cats';
import Slidestore from '../Slidestore'



const useStyles = makeStyles ({
   
    image : {
        width : '100%',
        
    },
    imageCat : {
        width : '100%',
        transition : 'all 0.5s',
          "&:hover": {
            transform: "scale(1.03)"
          },
    },
    overimg : {
        overflow : 'hidden'
      },
    wrapTitle : {
        padding: '30px 0px !important',
        alignItems: 'center',
        margin: 'auto',
        display: 'inline-flex',
        justifyContent: 'space-between',
        "@media(max-width:768px)":{
          padding: '25px',
          
        },
        // "@media(max-width:1200px)":{
        // padding : '25px 20px'
        // },
        
      },
      titleLeft : {
        '&:after':{
          content: '""',
          width: '50%',
          height: '4px',
          backgroundColor: '#EA8025',
          display: 'block',
       
          
      },
      fontSize: '40px',
      textTransform: 'uppercase',
      fontFamily: 'Bebas Neue',
      color: 'black',
      width: 'fit-content',
      '@media (max-width : 1200px)':{
        margin : 10
    
      },
      // '@media (max-width : 568px)':{
      //   fontSize:'20px'
      // }
    
      
      
      },
      wrapCat : {
          margin : 'auto',
      },
      cat : {
          position: "relative",
          padding :3,
          
          '@media (max-width : 1200px)':{
            padding : 10
        
          },
      },
      h3title :{
          position : 'absolute',
          top : -10,
          left : 20,
          fontFamily : 'Pacifico',
        
      },
      iconheart : {
          position : 'absolute',
          top : 10 ,
          right : 20,
          color : 'red',
          fontSize: 30
      },
      titleplace : {
          
          backgroundColor: '#EA8025',
          
          padding : '17px 10px 10px 10px'
         
          
      },
      wraptitleblog:{
          padding : 30,
      },
      titleblog : {
        fontSize: '20px',
        textTransform: 'uppercase',
        fontFamily: 'Oswald',
        color: 'white',
        width: 'fit-content',
      },
      textcontent :{
          fontFamily : 'Pacifico',
      }
      

});


const Storescreen = () => {



    const classes = useStyles();



    return(
        <div>
            <div><img className={classes.image} src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Banner/home-banner.jpg?raw=true" alt="" /></div>
            <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid className={classes.wrapTitle} item lg={8} xs={12}>
                    <div className={classes.titleLeft}>staff</div>
                </Grid>
                <Grid className={classes.wrapCat}  item xs={12} lg={8} >
                  <Grid container spacing = {0}>
                      {
                          Cats.length && Cats.map((item,index)=>{

                              return(
                                  <Grid className={classes.cat} item xs={6} lg={4}>
                                      <div className={classes.overimg}><img className={classes.imageCat} src={item.img} alt="" /></div>
                                      <h3 className={classes.h3title}>{item.title}</h3>
                                    {/* <div className={classes.iconheart}><i class="far  fa-heart"></i></div>   */}
                                  </Grid>
                              )
                          })
                      }
                  </Grid>
                </Grid>
                <Grid className={classes.wrapTitle} item lg={8} xs={12}>
                    <div className={classes.titleLeft}>kh??ng gian qu??n</div>
                </Grid>
                <Grid className={classes.wrapCat} item lg={8} xs={12}>
                    <Grid className={classes.titleplace} container spacing={0}>
                        <Grid className={classes.wraptitleblog} item lg ={6}xs = {12}>
                            <h3 className={classes.titleblog}>ch??o m???ng ?????n v???i Black Cat Cafe</h3>
                            <p className={classes.textcontent}>B?????c ch??n v??o c???a h??ng, tr?????c m???t b???n l?? qu???y ph???c v???. ??? ????y ch??ng t??i thi???t k??? kh??ng gian k??? c??? khi b???n trong l??c ch??? ?????i g???i ????? c??ng c?? th??? ???????c ng???m nh??n Boss c???a qu??n. 
                            V???i l??ng nhi???t t??nh hi???u kh??ch ch???c ch???n b???n s??? kh??ng bao gi??? qu??n.</p>
                        </Grid>
                        <Grid item lg={6} xs = {12}>
                             <div><img className={classes.image} src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Banner/cafe-meo-lizzy-house.jpg?raw=true" alt="" /></div>
                        </Grid>
                        

                    </Grid>
                    <Slidestore/>
                </Grid>
        
            </Grid>
    </div>
        </div>
    )
}
export default Storescreen