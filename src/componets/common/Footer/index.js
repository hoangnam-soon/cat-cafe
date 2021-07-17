import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background : 'black',
    padding :80
  },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
  footer : {
    display : 'flex',
    justifyContent: 'space-between',
    padding : '40px 0px',
    
    

},
logoFooter : {
    maxWidth : '200px',
    
    marginLeft : '40px',
    "@media ( max-width: 576px)": {
       maxWidth : 150
    },
    "@media ( max-width: 768px)": {
        marginLeft : '-40px ' 
    }
  
},
footerTagLink:{
    display : 'grid',
    
},

footerTagTitle: {
    fontSize: '18px',
    textTransform: 'uppercase',
    fontFamily: 'Bebas Neue',
    color: 'white',
    margin : '10px 0px'
},
footerTagInfor : {
    fontSize : '14px',
    textTransform : 'none',
    color : 'white',
   
},
footerBottom : {
    textAlign: 'center',
    padding : '40px 0px 0px 0px',
   
},
footerBottomLine : {
    width: '50%',
    height: '1px',
    backgroundColor: 'white',
    margin: '22px',
    display: 'inline-block'
    
},
footerIcon : {
    marginRight :10,
    fontSize: 30 ,
    '&:hover' : {
      color : '#EA8025',
  }

},
LinkFooter : {
    fontSize : '14px',
    textTransform : 'none',
    color : 'white',
    '&:hover' : {
        color : '#EA8025',
    }
}

}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6} sm={3}>
        <div><Link to='/'><img className={classes.logoFooter} src='https://hoangnam-soon.github.io/Cat-Cafe/img/logo4.png'></img></Link></div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div>
            <div className={classes.footerTagTitle}>About</div>
               <div className={classes.footerTagLink}>
                    <div><Link  className={classes.LinkFooter} to='/Store/' >Cửa hàng</Link></div>  
                    <div><Link className={classes.LinkFooter} to= '/Item/'>Sản phẩm</Link></div>   
                    <div><Link className={classes.LinkFooter} to= '/Pet-item/'>Phụ kiện pet</Link></div>   
                    <div><Link className={classes.LinkFooter} to= '/Blog'>Blog</Link></div>  
                </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div>
            <div className={classes.footerTagTitle}>ALWAYS-ON SUPPORT</div>
            <div className={classes.footerTagInfor}>0969 696 969 (8:00 - 22:00)</div>
          </div>
          <div>
            <div className={classes.footerTagTitle}>ADDRESS</div>
            <div className={classes.footerTagInfor}>Tầng 12A, tòa nhà Viwaseen Tower, <br/> số 48, Tố Hữu, Lê Văn Lương, Hà Nội</div>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div>
            <div className={classes.footerTagTitle}>EMAIL</div>
            <div className={classes.footerTagInfor}>mp@techmaster.vn</div>
          </div>
          <div>
             <div className={classes.footerTagTitle}>FOLLOW</div>
              <a className={classes.footerIcon} href="https://www.facebook.com/linkin.parks.169/"><i  class="fab fa-facebook-square"></i></a>
              <a className={classes.footerIcon} href="https://www.instagram.com/hoangnam1739/"><i class="fab fa-instagram-square"></i></a>
              <a className={classes.footerIcon} href="https://www.tiktok.com/@namusama03?lang=vi-VN"><i  class="fab fa-tiktok"></i></a>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.footerBottom}>
                <div className={classes.footerBottomLine}></div>
                <div className={classes.footerTagInfor}>Copyright © 2021 Black Cat Coffee . All rights reserved.</div>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}
