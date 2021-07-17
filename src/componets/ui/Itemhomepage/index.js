import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import {saveToLocal} from '../../../ulits';
import {itemHome} from '../../../assets/images/Item';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background : '#f2f2f2',
    
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  spacing : {
    width : '100%',
    margin : 'auto',
  
  },
  images : {
    maxWidth : 396,

    width : '100%',
    transition : 'all 0.4s',
    "&:hover" : {
      transform: "scale(1.04)"
    },
    '@media (max-width : 1200px)':{
      maxWidth : "none"
  
    },
   
  },
  overimg : {
    overflow : 'hidden'
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
      backgroundColor: '#EA8025',
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
      color : 'black',

    },
    display: 'inline-block',
    padding: '8px 15px',
    border: '1px solid #666666',
    color: 'white',
    borderRadius: '3px',
    background: 'linear-gradient(to left, #000 50%, #EA8025 50%) right',
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
  wrapItem : {
    margin: 'auto',
    
    
    
  },
  titleItem1 :{
    color : 'black',
    fontSize:18,
    fontFamily: 'Oswald',
    fontWeight:'500',
    marginLeft : 10,
    transition : 'all 0.4s',
    '&:hover' : {
      color : '#EA8025'
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
    textTransform : 'uppercase',
    margin:'15px 10px',
    color: '#EA8025',
    fontFamily: 'Oswald',
    fontWeight:'500',
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
    display: 'inline-block',
    padding: '8px 15px',
    border: '1px solid #666666',
    color: 'white',
    borderRadius: '3px',
    background: 'linear-gradient(to left, #EA8025 50%, #fff 50%) right',
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
  
  
   "@media (max-width:768px)":{
    padding: '15px 10px',
    marginTop : 0
      
    },
    "@media (max-width:576px)":{
      padding: '7px 10px',
      marginTop : 0
        
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
  marginTop:5,
  marginBottom: 20,
  display: 'grid'
},


},
backgroundItem : {
  backgroundColor : 'white'
},


  




}));

export default function Itemhomepage() {
  const classes = useStyles();
  let history = useHistory();
  
  const handClick = (item) => {

    saveToLocal('detail-item',item);
    history.push("/Detail-item/");
  }
  return (
    <div className={classes.root}>
    <Grid container spacing={3} classes={{"spacing-xs-3":classes.spacing}}>
      <Grid className={classes.wrapTitle} item lg={8} xs={12}>
          <div className={classes.titleLeft}>menu</div>
          <div ><Link className={classes.allButton} to='/Item/' >tất cả sản phẩm</Link></div>
      </Grid>
      <Grid className={classes.wrapItem} item lg={8} xs={12}>
        <Grid container spacing={3} classes={{"spacing-xs-3":classes.spacing}}>
          
            {
                itemHome.length && itemHome.map((item,index)=>{
                    return(
                      <>
                      <Grid  item xs={6} lg={4}>
                            <div className={classes.backgroundItem} onClick={()=>handClick(item)}>
                                <div className={classes.overimg}><Link><img className={classes.images} src={item.img} alt="" /></Link></div>
                                <div className={classes.inforTitle}>
                                    <h3 className={classes.h3title} onClick={()=>handClick(item)}><Link className={classes.titleItem1}>{item.title}</Link></h3>
                                    <div className={classes.titleItem2}>{item.price}</div>
                                    <Link className={classes.buyButton} onClick={()=>handClick(item)}>mua ngay</Link>
                                </div>

                            </div>
                    </Grid>
                    </>
                        
                    )
                })
            }
          
        </Grid>
      </Grid>
    
    </Grid>
     
    </div>
  );
}
