import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage:
    'url("https://i.pinimg.com/originals/26/98/1b/26981b8251fcf06abc08c8d5edfe57fe.jpg")',
    // backgroundRepeat: 'round'
    backgroundSize : 'cover'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  // spacing : {
  //   width : '100%',
  //   margin : 'auto',
  
  // },
  images : {
   width : '100%'
   
  },
   wrapTitle : {
    padding: '30px 25px !important',
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
      backgroundColor: 'black',
      display: 'block',
   
      
  },
  fontSize: '40px',
  textTransform: 'uppercase',
  fontFamily: 'Bebas Neue',
  color: '#EA8025',
  width: 'fit-content',
  // '@media (max-width : 768px)':{
  //   fontSize:'30px'

  // },
  // '@media (max-width : 568px)':{
  //   fontSize:'20px'
  // }

  
  
  },
  
  allButton : {
    '&:hover':{
      backgroundPosition: 'left',
      color : 'white',

    },
    fontSize : 16,
    display: 'inline-block',
    padding: '8px 15px',
    border: '1px solid #666666',
    color: 'black',
    borderRadius: '3px',
    background: 'linear-gradient(to left, #EA8025 50%, #000 50%) right',
    backgroundSize: '200%',
    transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
    // '@media (max-width : 768px)':{
    //   fontSize:'14px',
    //   padding: '5px 10px',
  
    // },
    // '@media (max-width : 576px)':{
    //   fontSize:'10px',
    //   padding: '3px 7px',
    // }
  },
  wrapBlog : {
    margin :'auto !important',
  },
  
  titleItem1 :{
    color : 'white',
    fontSize:18,
    textTransform : 'uppercase',
    fontFamily: 'Oswald',
    fontWeight:'500',
    marginLeft : 10,
    transition: 'all 0.4s',
    '&:hover': {
      color : 'black'
    },
    // "@media (max-width:768px)":{
    //   margin : '10px '
      
    // },
    "@media (max-width:1200px)":{
      margin : '10px '
      
    },
    

  },
  titleItem2 :{
    fontSize:18,
    // textTransform : 'uppercase',
    margin:'15px 10px',
    color: 'black',
    fontFamily: 'Charm',
    // fontWeight:'600',
    "@media (max-width:768px)":{
      margin : '10px 10px'
      
    },
    "@media (max-width:1200px)":{
      margin : '10px '
      
    },
    

  },
  buyButton :{
    '&:hover':{
      backgroundPosition: 'left',
      color : 'black',

    },
    fontFamily : 'Bebas Neue',
    display: 'inline-block',
    padding: '8px 15px',
    border: '1px solid #666666',
    color: 'white',
    borderRadius: '3px',
    background: 'linear-gradient(to left, #000 50%, #fff 50%) right',
    backgroundSize: '200%',
    transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
    margin : '20px 10px',
    
    
    // "@media (max-width:768px)":{
    //   margin : '10px 20px'
      
    // },
    "@media (max-width:1200px)":{
      margin : '20px 10px'
      
    }, '@media (max-width : 768px)':{
      fontSize:'14px',
     
  
    },
    '@media (max-width : 576px)':{
      fontSize:'10px',
     
    }


},

inforTitle:{
  padding: '12px 15px',
  backgroundColor : '#EA8025',
  
   "@media (max-width:768px)":{
    padding: '7px 10px',
    marginTop : -15
      
    }

},
      h3title:{
      marginBottom: 0,
      marginTop :0,
      maxHeight :60,
      // height : 60,
      lineHeight:1.4,
      "@media (max-width:576px)":{
      height:50,
      //  height :50,
        marginTop:10,
        display: 'grid'
      },
},

}));

export default function Bloghomepage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} >
      <Grid classes={{'root':classes.wrapTitle}} item lg={8} xs={12}>
          <div className={classes.titleLeft}>blog</div>
          <div ><Link className={classes.allButton} to='/Blog/' >xem th??m</Link></div>
      </Grid>
      <Grid classes={{'root':classes.wrapTitle}} item lg={8} xs ={12}>
          <div>
            <div><Link><img className={classes.images} src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/blog-nh%E1%BB%AFng-th%E1%BB%A9-kh%C3%B4ng-n%C3%AAn.jpg?raw=true" alt="" /></Link></div>
            <div className={classes.inforTitle}>
              <h3 className={classes.h3title}><Link to='/Blog/' className={classes.titleItem1}>NH???NG TH??? KH??NG N??N CHO "HO??NG TH?????NG" C???A B???N ??N</Link></h3>
              <div className={classes.titleItem2}>D?? m??o c??ng c???a b???n c?? th??? ?????n c??? th??? gi???i??? hay r???t ???k??n c?? ch???n canh??? th?? c?? nh???ng th???c ph???m sen v???n c???n gi??p m??o tr??nh xa. Ch??? ??n ph???i m???t ch??t nh??? c??ng c?? th??? ???nh h?????ng ?????n s???c kh???e c???a m??o ?????y.</div>
              <Link to='/Blog/' className={classes.buyButton}>xem th??m</Link>
            </div>
          </div>
      </Grid>

        
          
          
          
          
      
        
      </Grid>
    </div>
  );
}
