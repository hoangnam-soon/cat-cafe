import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { sanpham } from '../../../assets/images/Item';
import { useHistory } from "react-router-dom";
import {saveToLocal} from '../../../ulits';

const useStyles =makeStyles({

     

    images : {
        maxWidth : 255,
        width : '100%',
        // transition : 'all 0.5s',
        // "&:hover": {
        //   transform: "scale(1.03)"
        // },
        "@media (max-width:1475px)":{
          maxWidth : 210
           
         },
         "@media (max-width:1200px)":{
          maxWidth : 255
           
         },
        "@media (max-width:768px)":{
         maxWidth : 222
          
        },
        "@media (max-width:576px)":{
          maxWidth : 172
           
         },
        "@media (max-width:400px)":{
          maxWidth : 162
           
         },
        //  "@media (max-width:375px)":{
        //   maxWidth : 150
           
        //  },



    },
    overimg : {
      overflow : 'hidden'
    },
    inforTitle:{
        padding: '12px 15px',
        
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
       display :'grid',
      //  maxHeight: 40,
        marginTop:20
      },
      // "@media (max-width:768px)":{
      //   maxHeight :
         
      //  },
      //  "@media (max-width:576px)":{
      //   maxHeight :20
         
      //  },
      
    },

    titleItem1 :{
        color : 'black',
        // textAlign: 'start',
        fontSize:22,
        fontFamily: 'Charm',
        textTransform : 'capitalize',
        fontWeight:'600',
        transition : 'all 0.4s',
        '&:hover':{
          color : '#EA8025'
        },
        
        "@media (max-width:1200px)":{
          // margin : '10px 20px',
          fontSize :16
          
        },
        "@media (max-width:768px)":{
          // margin : '10px 40px'
          fontSize : 14
        },
        "@media (max-width:576px)":{
          // margin : '10px 10px',
          fontSize :12
          
        },
        
    
      },
      titleItem2 :{
        fontSize:20,
        margin : '10px 0px',
        // textAlign: 'start',
        color: '#EA8025',
        fontFamily: 'Charm',
        fontWeight:'600',
        textTransform: 'uppercase',
       
        "@media (max-width:1200px)":{
          // margin : '10px 20px',
          fontSize :16
          
        },
        "@media (max-width:768px)":{
          // margin : '10px 40px'
          fontSize : 14
        },
        "@media (max-width:576px)":{
          // margin : '10px 10px',
          fontSize :12
          
        },
        
        
    
      },
      buyButton :{
        '&:hover':{
          // backgroundPosition: 'left',
          background : 'white',
          color : 'black',
    
        },
        fontFamily : 'Bebas Neue',
        display: 'inline-block',
        padding: '8px 15px',
        border: '1px solid #666666',
        color: 'white',
        borderRadius: '3px',
        background : '#EA8025',
        // background: 'linear-gradient(to left, #EA8025 50%, #fff 50%) right',
        // backgroundSize: '200%',
        transition: 'all 0.7s',
        margin: '30px 0px',
        float : 'left',
        "@media (max-width:1200px)":{
          margin : '20px 0px',
          fontSize : '14px'
          
        },
        
        "@media (max-width:768px)":{
          margin : '10px 0px',
          
          
        },
        
        "@media (max-width:576px)":{
          margin : '10px 0px',
          fontSize : '12px'
          
        },
    
    
    },
    wrapItem : {
        display : 'flex',
        flexWrap : 'wrap',
       
    },
    backgroundItem : {
        flexBasis : 'unset',
        margin: '10px',
        backgroundColor : 'white',
        "@media (max-width:576px)":{
          margin : 5,
         
          
        },
        
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
      margin : '5px 10px',
      '@media (max-width : 768px)':{
        fontSize:'30px'
    
      },
      '@media (max-width : 568px)':{
        fontSize:'20px'
      }
    
      
      
      },

});




const Listitem = () => {

  let history = useHistory();
  
  const handClick = (item) => {

    saveToLocal('detail-item',item);
    history.push("/Detail-item/");
  }

  const classes = useStyles();

    const renderlistData= (list) =>{
               
        return(<>
            {
                list.length && list.map((it,index)=>{
                    return(<><Grid classes={{"grid-xs-6":classes.backgroundItem}}  item xs={6} lg={4}>
                            <div onClick={() => handClick(it)}>
                            <div className={classes.overimg}><Link><img className={classes.images} src={it.img} alt="" /></Link></div>
                            <div className={classes.inforTitle}>
                                <h3 className={classes.h3title} onClick={() => handClick(it)}><Link className={classes.titleItem1}>{it.title}</Link></h3>
                                <div className={classes.titleItem2}>{it.price}</div>
                                <Link className={classes.buyButton} onClick={() => handClick(it)}>mua ngay</Link>
                            </div>

                            </div>
                       
                            
                       
                    
                    </Grid>

                      
                    </>
                        
                    )
                })
            }
        </>)
    };

   const renderListitem = () => {

         return(
                <>
                        {
                            sanpham.map((item,index)=>{

                                return(<>
                                    <div className={classes.titleLeft} id={item.link} >{item.nameItem}</div>
                                    {
                                        item.data && item.data.length && 
                                       <Grid className={classes.wrapItem} item xs={12}>
                                       {renderlistData(item.data)}
                                       </Grid>
                                          
                                        
                                    }
                                </>)
                            })
                        }
                </>
         )
   };

   return(
   <div>
       {
           renderListitem()
       }
   </div>
        
   
   
      
   )

}

export default Listitem